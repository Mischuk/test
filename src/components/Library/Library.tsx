import React, { useRef, useState } from 'react';
import { handleUploadKey } from '../../ui';
import { MODAL_TITLES, paramActorId, PK_FORM_TYPE_FILE, SIGN_STEPS } from './Library.const';
import { createURL, verifyInputData } from './Library.utils';
import KeyInfoPanel from './components/KeyInfoPanel/KeyInfoPanel';
import { VersionTag } from '../VersionTag/VersionTag';
import { Language, Open } from '../../types';
import Spinner from '../Spinner/Spinner';
import { useInputData } from './hooks/useInputData';
import * as Styled from './Library.styles';
import euSignFile from './Library.instance';
import EuSignModel from './Library.model';
import MaskInput from './components/MaskInput/MaskInput';
import { useTranslation } from '../../services/i18n';

const euSign = new EuSignModel(euSignFile);

type LibraryProps = Open & {
  unmount: (redirectUrl?: string) => void;
};

type SignedData = string | Uint8Array;

const INITIAL_ERRORS = {
  initialize: null,
  readKey: null,
  signData: null,
};

function Widget({
  unmount,
  documentURL,
  redirectURL,
  documentData,
  callbackURL,
  actorId,
  lang = Language.EN,
}: LibraryProps) {
  const { t } = useTranslation();
  const [isInitializing, setIsInitializing] = useState(false);
  const [errors, setErrors] = useState<any>(INITIAL_ERRORS);
  const [currentStep, setCurrentStep] = useState(SIGN_STEPS.INIT);
  const [keyData, setKeyData] = useState<any>(null);
  const [selectedKeyName, setSelectedKeyName] = useState('');
  const [isReadingKey, setIsReadingKey] = useState(false);
  const [isSigningData, setIsSigningData] = useState(false);
  const [fileKeyPassword, setFileKeyPassword] = useState('');

  const originalInputRef = useRef<HTMLInputElement>(null);
  const duplicateInputRef = useRef<HTMLInputElement>(null);

  const inputs = useInputData({ documentData, documentURL, callbackURL, redirectURL, actorId });

  const clearSteps = () => {
    setErrors(INITIAL_ERRORS);
    setKeyData(null);
    setSelectedKeyName('');
    setIsSigningData(false);
    setIsReadingKey(false);
    setIsInitializing(false);
    setFileKeyPassword('');

    if (originalInputRef.current) {
      originalInputRef.current.value = '';
    }
    if (duplicateInputRef.current) {
      duplicateInputRef.current.value = '';
    }
  };

  const handleChangePkFile = (e: any) => {
    // @TODO: add validation for file type, if unsupported file type show error for the user

    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setErrors({ ...errors, readKey: null });
    handleChange(e);
    handleUploadKey(e);
    setSelectedKeyName(file.name);
  };

  const handleReadKey = async () => {
    setIsReadingKey(true);

    try {
      const keyInfo = await euSign.getKeyData({ password: fileKeyPassword });
      setKeyData(keyInfo);
      setCurrentStep(SIGN_STEPS.VERIFY_KEY);
    } catch (error: any) {
      setErrors({ ...errors, readKey: error.message || error });
    } finally {
      setIsReadingKey(false);
    }
  };

  const onSelectLibraryType = async (type: number) => {
    // Verify input data, and close on error
    try {
      verifyInputData({
        documentData: inputs.documentData,
        documentURL: inputs.documentURL,
        callbackURL: inputs.callbackURL,
        actorId: inputs.actorId,
      });
    } catch (error) {
      console.error(error);
      unmount();
      return;
    }

    // Start initializing library
    setIsInitializing(true);

    try {
      // Set choosen library type
      await euSign.setLibraryType({ type, lang, actorId: inputs.actorId });

      // Change step to read key
      setCurrentStep(SIGN_STEPS.READ_KEY);
    } catch (error) {
      setCurrentStep(SIGN_STEPS.FAIL_INIT);
      setErrors({ ...errors, initialize: error });
    } finally {
      setIsInitializing(false);
    }

    // const certs = await euSign.getCACertificates();
    // console.log('certs', certs);
  };

  const handleVerifyServer = async ({
    data,
    fileName,
    signature,
    documentData,
    documentURL,
    callbackURL,
  }: {
    data: string | Uint8Array;
    fileName?: string;
    signature: SignedData;
    documentData?: string;
    documentURL?: string;
    callbackURL: string;
  }) => {
    try {
      const payload: any = {
        file_name: fileName,
        signature,
        callback_url: callbackURL,
      };

      if (documentURL) {
        payload.file_url = documentURL;
      }

      if (documentData && !documentURL) {
        payload.file_data = documentData;
      }

      const response = await fetch(
        createURL(process.env.REACT_APP_VERIFY!, { [paramActorId]: inputs.actorId }),

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        const data = await response.json();

        throw new Error(`
          Status code: ${response.status}.
          Reason: ${JSON.stringify(data)}
        `);
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  };

  const handleSignData = async () => {
    setIsSigningData(true);

    try {
      let payload: {
        data: string | Uint8Array;
        fileName?: string;
      } = {
        data: '',
      };

      if (inputs.documentURL) {
        const fetchedData = await euSign.fetchData(inputs.documentURL, {
          [paramActorId]: inputs.actorId,
        });
        payload = {
          data: fetchedData.data,
          fileName: fetchedData.fileName || '',
        };
      }

      // @TODO: add handle documentData for xss attacks
      if (documentData) {
        payload = {
          data: atob(documentData),
        };
      }

      const signedValue = await euSign.signData({
        dataInput: payload.data,
        password: fileKeyPassword,
      });

      // @TODO: add verification on client side, issue large files case
      await euSign.verifySignData({
        data: payload.data,
        sign: signedValue,
      });

      await handleVerifyServer({
        data: payload.data,
        fileName: payload.fileName,
        signature: signedValue,
        documentData,
        documentURL,
        callbackURL,
      });

      setIsSigningData(false);
      unmount(redirectURL);
    } catch (error: any) {
      const message = `Failed during the signing process. Reason: ${error.message || error}`;

      setErrors({
        ...errors,
        signData: message,
      });
    } finally {
      setIsSigningData(false);
    }
  };

  const handleClose = () => unmount();

  const handleChange = (event: any) => {
    const original: any = originalInputRef.current;
    const duplicate: any = duplicateInputRef.current;

    if (original && original.files.length > 0) {
      const file = original.files[0];
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      duplicate.files = dataTransfer.files;

      // Trigger change event for duplicate input
      const changeEvent = new Event('change', {
        bubbles: true,
        cancelable: true,
      });
      duplicate.dispatchEvent(changeEvent);
    }
  };

  const onBackward = () => {
    switch (currentStep) {
      case SIGN_STEPS.READ_KEY:
        setCurrentStep(SIGN_STEPS.INIT);
        clearSteps();
        break;
      case SIGN_STEPS.VERIFY_KEY:
        setCurrentStep(SIGN_STEPS.READ_KEY);
        clearSteps();
        break;
      default:
        break;
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Modal.Wrapper>
        <Styled.Modal.Root>
          <Styled.Modal.Header>
            {(currentStep === SIGN_STEPS.READ_KEY || currentStep === SIGN_STEPS.VERIFY_KEY) && (
              <Styled.Modal.Backward onClick={onBackward}>&larr;</Styled.Modal.Backward>
            )}
            <Styled.Modal.Title>{t(MODAL_TITLES[currentStep] as any)}</Styled.Modal.Title>
            <Styled.Modal.Close onClick={handleClose}>&times;</Styled.Modal.Close>
          </Styled.Modal.Header>

          <div>
            <input
              type="file"
              id="pkFile"
              readOnly
              ref={duplicateInputRef}
              autoComplete="off"
              spellCheck="false"
              hidden
            />
          </div>

          <>
            {currentStep === SIGN_STEPS.INIT && (
              <Styled.Layout.Providers>
                {isInitializing && <Spinner />}
                {errors.initialize && (
                  <Styled.ErrorMessage>{errors.initialize.message}</Styled.ErrorMessage>
                )}

                <Styled.SignProvider.Root data-disabled={true}>
                  <Styled.SignProvider.Icon data-attr="diia" />
                  {t('diia')}
                  <Styled.SignProvider.Arrow />
                </Styled.SignProvider.Root>
                <Styled.SignProvider.Root
                  onClick={() => {
                    onSelectLibraryType(PK_FORM_TYPE_FILE);
                  }}
                >
                  <Styled.SignProvider.Icon data-attr="key" />
                  {t('dsk')}
                  <Styled.SignProvider.Arrow />
                </Styled.SignProvider.Root>
                <Styled.SignProvider.Root data-disabled={true}>
                  <Styled.SignProvider.Icon data-attr="smartid" />
                  {t('smart_id')}
                  <Styled.SignProvider.Arrow />
                </Styled.SignProvider.Root>
              </Styled.Layout.Providers>
            )}
            {currentStep === SIGN_STEPS.READ_KEY && (
              <Styled.Layout.ReadKey>
                {isReadingKey && <Spinner />}
                {errors.readKey && <Styled.ErrorMessage>{errors.readKey}</Styled.ErrorMessage>}
                <div>
                  <div>
                    <Styled.FileInputArea.Root>
                      <input
                        type="file"
                        name="pkFileD"
                        id="pkFile"
                        ref={originalInputRef}
                        onChange={handleChangePkFile}
                        accept="application/octet-stream,application/x-pkcs12,application/pkcs8,application/x-java-keystore,application/x-zs2,.dat,.pfx,.pk8,.jks,.zs2"
                        hidden
                        autoComplete="off"
                        spellCheck="false"
                      />
                      <div>
                        <Styled.FileInputArea.Label>
                          {selectedKeyName ? selectedKeyName : t('select_key')}
                        </Styled.FileInputArea.Label>
                        <Styled.FileInputArea.LabelDesc>
                          {t('key_formats')}
                        </Styled.FileInputArea.LabelDesc>
                      </div>
                      <Styled.Button as="div">{t('select')}</Styled.Button>
                    </Styled.FileInputArea.Root>
                  </div>

                  <Styled.GroupControl>
                    <MaskInput
                      autoComplete="off"
                      spellCheck="false"
                      placeholder={t('key_password_placeholder')}
                      onChange={(e) => {
                        setFileKeyPassword(e.target.value);
                        setErrors({ ...errors, readKey: null });
                      }}
                      data-error={errors.readKey ? 'true' : 'false'}
                    />
                    <Styled.Button
                      id="readkey-button"
                      onClick={handleReadKey}
                      disabled={isReadingKey || !selectedKeyName || !fileKeyPassword}
                    >
                      {t('read_key')}
                    </Styled.Button>
                  </Styled.GroupControl>
                </div>
              </Styled.Layout.ReadKey>
            )}
            {currentStep === SIGN_STEPS.VERIFY_KEY && (
              <Styled.Layout.VerifyKey>
                {errors.signData && <Styled.ErrorMessage>{errors.signData}</Styled.ErrorMessage>}
                <div id="key-data">{keyData && <KeyInfoPanel data={keyData} />}</div>

                <div>
                  <Styled.Button id="readkey-button" onClick={handleSignData} as="div">
                    {t('approve')}
                  </Styled.Button>
                </div>

                {isSigningData && <Spinner />}
              </Styled.Layout.VerifyKey>
            )}
            {currentStep === SIGN_STEPS.FAIL_INIT && (
              <Styled.Layout.Fallback>
                <Styled.ErrorMessage>{errors.initialize.message}</Styled.ErrorMessage>
              </Styled.Layout.Fallback>
            )}
          </>
          <VersionTag />
        </Styled.Modal.Root>
      </Styled.Modal.Wrapper>
    </Styled.Wrapper>
  );
}

export default Widget;
