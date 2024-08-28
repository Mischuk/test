import { EndUserSettings } from 'euscp';
export declare const PK_FORM_TYPE_FILE = 1;
export declare const PK_FORM_TYPE_KM = 2;
export declare const PK_FORM_TYPE_KSP = 3;
export declare const paramActorId = "aid";
export declare const euSettings: (actorId: string) => EndUserSettings;
export declare const SIGN_STEPS: {
    INIT: string;
    READ_KEY: string;
    VERIFY_KEY: string;
    FAIL_INIT: string;
};
export declare const MODAL_TITLES: {
    [x: string]: string;
};
