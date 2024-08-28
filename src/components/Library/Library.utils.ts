import { Open } from '../../types';
import mime from 'mime';

export function readFile(file: any) {
  return new Promise(function (resolve, _reject) {
    var reader = new FileReader();
    reader.onloadend = function (evt: any) {
      if (evt.target.readyState !== FileReader.DONE) return;
      resolve({
        file: file,
        data: new Uint8Array(evt.target.result),
      });
    };
    reader.readAsArrayBuffer(file);
  });
}

export function onConfirmKSPOperation(kspEvent: any) {}

type VerifyInputDataParams = Pick<Open, 'documentData' | 'documentURL' | 'callbackURL' | 'actorId'>;

export function verifyInputData({
  documentData,
  documentURL,
  callbackURL,
  actorId,
}: VerifyInputDataParams) {
  if (!callbackURL) {
    throw new Error('callbackURL is required');
  }

  if (!actorId) {
    throw new Error('actorId is required');
  }

  if (!documentURL && !documentData) {
    throw new Error('Either documentURL or documentData is required');
  }

  return true;
}

export function getFileNameFromUrl(url: string, contentType: string | null) {
  let fileName = url.split('/').pop()?.split('#')[0].split('?')[0] || 'unknown';

  if (!fileName.includes('.') && contentType) {
    const extension = mime.getExtension(contentType);
    fileName += `.${extension}`;
  }

  return fileName;
}

export function getFileNameFromContentDisposition(contentDisposition: string | null) {
  const match = contentDisposition && contentDisposition.match(/filename="?([^"]+)"?/);
  return match && match[1] ? match[1] : null;
}

export function createURL(url: string, params?: Record<string, string>): string {
  const res = new URL(url);

  if (params) {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });
    res.search = searchParams.toString();
  }

  return res.toString();
}
