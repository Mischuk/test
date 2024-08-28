import { EndUser, EndUserConstants, NamedData } from 'euscp';
import { euSettings, PK_FORM_TYPE_FILE } from './Library.const';
import {
  createURL,
  getFileNameFromContentDisposition,
  getFileNameFromUrl,
  onConfirmKSPOperation,
  readFile,
} from './Library.utils';
import { Language } from '../../types';

type Data = string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>;

class EuSignModel {
  private euSign: EndUser;
  private formType: number = PK_FORM_TYPE_FILE;

  constructor(euSign: any) {
    this.euSign = euSign;
  }

  async initialize(actorId: string) {
    return new Promise((resolve, reject) => {
      let isInitialized = false;
      this.euSign
        .IsInitialized()
        .then((result: boolean) => {
          isInitialized = result;
          if (isInitialized) {
            console.log('Sign widget library already initialized');
            return;
          }

          console.log('Sign widget library initializing...');
          const settings = euSettings(actorId);
          return this.euSign.Initialize(settings);
        })
        .then(() => {
          if (isInitialized) return;

          console.log('Sign widget library initialized');
          console.log('Event listener for KSPs registering...');

          return this.euSign.AddEventListener(
            EndUserConstants.EndUserEventType.ConfirmKSPOperation,
            onConfirmKSPOperation
          );
        })
        .then(function () {
          if (!isInitialized) console.log('Event listener for KSPs registered');
          console.log('Sign widget library is initialized');
          isInitialized = true;
          resolve(true);
        })
        .catch(function (e: any) {
          reject(e);
        });
    });
  }

  async setLibraryType({ type, lang, actorId }: { type: number; lang: Language; actorId: string }) {
    this.formType = type;

    // switch (type) {
    //   case PK_FORM_TYPE_FILE:
    //     this.euSign = euSignFile;
    //     break;
    //   default:
    //     this.euSign = euSignFile;
    //     break;
    // }

    try {
      this.euSign.SetLanguage(lang);

      await this.initialize(actorId);
      // if (this.euSign === euSignFile) return [];
      // return this.euSign.GetKeyMedias();
      return [];
    } catch (error: any) {
      console.log('error', error);
      console.log('failed on init');
      throw new Error(error.message || error);
    }
  }

  async readPrivateKey({ password }: { password: string }): Promise<any> {
    const pkFileInput =
      this.formType === PK_FORM_TYPE_FILE
        ? (document.getElementById('pkFile') as HTMLInputElement)
        : null;
    /*
      Загальне ім'я ЦСК з списку CAs.json, який видав сертифікат для ос. ключа.
      Якщо null бібліотека намагається визначити ЦСК автоматично за
      сервером CMP\сертифікатом. Встановлюється у випадках, коли ЦСК не
      підтримує CMP, та для пришвидшення пошуку сертифіката ос. ключа
	  */
    let caCN: any = null;
    /*
      Сертифікати, що відповідають ос. ключу (масив об'єктів типу Uint8Array).
      Якщо null бібліотека намагається завантажити їх з ЦСК автоматично з сервера CMP.
      Встановлюється у випадках, коли ЦСК не підтримує CMP, та для пришвидшення
      пошуку сертифіката ос. ключа
	  */
    let pkCertificates: any = null;

    return new Promise((resolve, reject) => {
      switch (this.formType) {
        case PK_FORM_TYPE_FILE:
          if (pkFileInput?.value == null || pkFileInput.value === '') {
            pkFileInput?.focus();
            reject('Don`t select file with personal key');
            return;
          }

          if (password === null || password === '') {
            reject('Password is required');
            return;
          }

          let certs: any = null;

          if (!pkFileInput || !pkFileInput.files) return;

          readFile(pkFileInput.files[0])
            .then((result: any) => {
              // Якщо файл з ос. ключем має розширення JKS, ключ може містити декілька ключів,
              // для зчитування такого ос. ключа необхіно обрати який ключ повинен зчитуватися
              if (result.file.name.endsWith('.jks')) {
                return this.euSign.GetJKSPrivateKeys(result.data).then((jksKeys) => {
                  // @TODO: handle multiple keys
                  const pkIndex = 0;

                  pkCertificates = [];

                  for (let i = 0; i < jksKeys[pkIndex].certificates.length; i++) {
                    pkCertificates.push(jksKeys[pkIndex].certificates[i].data);
                  }

                  certs = jksKeys[pkIndex].certificates;

                  return this.euSign.ReadPrivateKeyBinary(
                    jksKeys[pkIndex].privateKey,
                    password,
                    pkCertificates,
                    caCN
                  );
                });
              }

              certs = pkCertificates;

              return this.euSign.ReadPrivateKeyBinary(result.data, password, pkCertificates, caCN);
            })
            .then(function (result) {
              resolve({ result, certs });
            })
            .catch(function (e) {
              console.log('e', e);
              reject(e);
            });
          break;
        default:
          console.error('НWrong type of personal key');
          reject('НWrong type of personal key');
          break;
      }
    });
  }

  async getKeyData({ password }: { password: string }) {
    const { result, certs } = await this.readPrivateKey({ password });
    const name = result.subjCN;
    const organization = result.subjOrg;
    const rnokpp = result.subjDRFOCode;
    const certicates = certs.map(({ infoEx }: any) => {
      return {
        title: infoEx.keyUsage,
        issuerCN: infoEx.issuerCN,
        serial: infoEx.serial,
        startDate: infoEx.certBeginTime,
        endDate: infoEx.certEndTime,
      };
    });

    return {
      name,
      organization,
      rnokpp,
      certicates,
    };
  }

  async fetchData(url: string, params: Record<string, string>) {
    try {
      const response = await fetch(
        createURL(process.env.REACT_APP_GET_FILE!, {
          url: url,
          ...params,
        })
      );
      const statusCode = response.status;
      const contentType = response.headers.get('content-type');

      if (statusCode >= 400) {
        throw new Error(`Failed to fetch data. Status code: ${statusCode}`);
      }

      let fileName: string | null | undefined = getFileNameFromContentDisposition(
        response.headers.get('content-disposition')
      );

      if (!fileName) {
        fileName = getFileNameFromUrl(url, contentType);
      }

      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);

      return { data, fileName };
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }

  async signData({ dataInput, password }: { password: string; dataInput: Data }): Promise<string> {
    try {
      await this.readPrivateKey({ password });
      // When the second argument is true, it returns a string, otherwise Uint8Array
      const signResult = await this.euSign.SignData(dataInput, true);
      return signResult as string;
    } catch (error: any) {
      throw new Error(`
        ${error.message || error}
      `);
    }
  }

  async verifySignData({ data, sign }: { data: Uint8Array | string; sign: Uint8Array | string }) {
    try {
      await this.euSign.VerifyData(data, sign);
    } catch (error: any) {
      throw new Error(`
        Failed to verify signature on client.
        Reason:
        ${error.message || error}
      `);
    }
  }

  async getCACertificates() {
    try {
      // const res = await this.euSign.GetOwnCertificates();
      const res = await this.euSign.GetCAs();
      console.log('res', res);
      return res;
    } catch (error: any) {
      throw new Error(`
        Failed to get CA certificates.
        Reason:
        ${error.message || error}
      `);
    }
  }
}

export default EuSignModel;
