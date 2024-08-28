import { EndUserConstants, EndUserSettings } from 'euscp';
import { createURL } from './Library.utils';

export const PK_FORM_TYPE_FILE = 1;
export const PK_FORM_TYPE_KM = 2;
export const PK_FORM_TYPE_KSP = 3;
export const paramActorId = 'aid';

export const euSettings = (actorId: string): EndUserSettings => {
  return {
    language: 'uk',
    encoding: 'utf-8',
    httpProxyServiceURL: process.env.REACT_APP_API_URL!,
    directAccess: true,
    CAs: createURL(process.env.REACT_APP_CERT_CAS!, { [paramActorId]: actorId }),
    CACertificates: createURL(process.env.REACT_APP_CERT_CA_CERTFITICATES_P7B!, {
      [paramActorId]: actorId,
    }),
    allowedKeyMediaTypes: [
      'е.ключ ІІТ Алмаз-1К',
      'е.ключ ІІТ Кристал-1',
      'ID-карта громадянина (БЕН)',
      'е.ключ ІІТ Алмаз-1К (PKCS#11)',
      'е.ключ ІІТ Кристал-1 (PKCS#11)',
    ],
    // Реєстрація хмарних провайдерів
    KSPs: [
      {
        name: 'ІІТ - хмарний підпис (2)',
        ksp: EndUserConstants.EndUserKSP.IIT,
        address: 'https://sserver2.iit.com.ua',
        port: '443',
      },
    ],
  };
};

export const SIGN_STEPS = {
  INIT: 'initStep',
  READ_KEY: 'readKeyStep',
  VERIFY_KEY: 'verifyKeyStep',
  FAIL_INIT: 'failInitStep',
};

export const MODAL_TITLES = {
  [SIGN_STEPS.INIT]: 'choose_provider',
  [SIGN_STEPS.READ_KEY]: 'file_key',
  [SIGN_STEPS.VERIFY_KEY]: 'verify_key_info',
  [SIGN_STEPS.FAIL_INIT]: 'failed_init',
};
