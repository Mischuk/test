import { Open } from '../../../types';
type VerifyInputDataParams = Pick<Open, 'documentData' | 'documentURL' | 'callbackURL' | 'redirectURL' | 'actorId'>;
declare function useInputData(data: VerifyInputDataParams): {
    redirectURL: string;
    documentURL: string;
    callbackURL: string;
    documentData: string;
    actorId: string;
};
export { useInputData };
