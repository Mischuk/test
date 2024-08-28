import { useMemo } from 'react';
import { Open } from '../../../types';
import DOMPurify from 'dompurify';

type VerifyInputDataParams = Pick<
  Open,
  'documentData' | 'documentURL' | 'callbackURL' | 'redirectURL' | 'actorId'
>;

function sanitizeUrl(url?: string): string {
  return url ? DOMPurify.sanitize(new URL(url, window.location.origin).toString()) : '';
}

function sanitizeBase64(base64?: string): string {
  return base64 && /^[A-Za-z0-9+/]+={0,2}$/.test(base64) ? base64 : '';
}

function sanitizeString(str?: string): string {
  return str ? DOMPurify.sanitize(str) : '';
}

function useInputData(data: VerifyInputDataParams) {
  return useMemo(() => {
    const redirectURL = sanitizeUrl(data.redirectURL);
    const documentURL = sanitizeUrl(data.documentURL);
    const callbackURL = sanitizeUrl(data.callbackURL);
    const documentData = sanitizeBase64(data.documentData);
    const actorId = sanitizeString(data.actorId);

    return { redirectURL, documentURL, callbackURL, documentData, actorId };
  }, [data]);
}

export { useInputData };
