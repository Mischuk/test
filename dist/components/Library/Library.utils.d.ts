import { Open } from '../../types';
export declare function readFile(file: any): Promise<unknown>;
export declare function onConfirmKSPOperation(kspEvent: any): void;
type VerifyInputDataParams = Pick<Open, 'documentData' | 'documentURL' | 'callbackURL' | 'actorId'>;
export declare function verifyInputData({ documentData, documentURL, callbackURL, actorId, }: VerifyInputDataParams): boolean;
export declare function getFileNameFromUrl(url: string, contentType: string | null): string;
export declare function getFileNameFromContentDisposition(contentDisposition: string | null): string | null;
export declare function createURL(url: string, params?: Record<string, string>): string;
export {};
