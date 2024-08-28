import { NamedData } from 'euscp';
import { Language } from '../../types';
type Data = string | Uint8Array | NamedData | Array<string | Uint8Array | NamedData>;
declare class EuSignModel {
    private euSign;
    private formType;
    constructor(euSign: any);
    initialize(actorId: string): Promise<unknown>;
    setLibraryType({ type, lang, actorId }: {
        type: number;
        lang: Language;
        actorId: string;
    }): Promise<never[]>;
    readPrivateKey({ password }: {
        password: string;
    }): Promise<any>;
    getKeyData({ password }: {
        password: string;
    }): Promise<{
        name: any;
        organization: any;
        rnokpp: any;
        certicates: any;
    }>;
    fetchData(url: string, params: Record<string, string>): Promise<{
        data: Uint8Array;
        fileName: string;
    }>;
    signData({ dataInput, password }: {
        password: string;
        dataInput: Data;
    }): Promise<string>;
    verifySignData({ data, sign }: {
        data: Uint8Array | string;
        sign: Uint8Array | string;
    }): Promise<void>;
    getCACertificates(): Promise<import("euscp").CASettings[]>;
}
export default EuSignModel;
