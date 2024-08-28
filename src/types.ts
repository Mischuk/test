export enum Language {
  EN = 'en',
  UA = 'ua',
}

export enum TransactionType {
  Sign = 'sign',
  KeyRead = 'key_read',
  WidgetInit = 'widget_init',
  Technical = 'technical',
  Limit = 'limit',
  CA = 'ca',
}

export type Provider = string;

export interface OpenBase {
  /**
   * The `actorId` parameter specifies the identifier of the actor who will sign the document.
   */
  actorId: string;
  /**
   * The `redirectURL` parameter specifies the URL where the user will be redirected after successfully signing the document.
   */
  redirectURL?: string;
  /**
   *  The `callbackURL` to which the response will be sent when the document is signed.
   */
  callbackURL: string;
  /**
   *  The `lang` parameter specifies the language of the widget.
   */
  lang?: Language;
  /**
   *  The `providers` parameter specifies the list of providers that will be displayed in the widget.
   *  If the parameter is not specified, all providers will be displayed.
   */
  providers?: Provider[];
}

export interface OpenWithData extends OpenBase {
  /**
   * The `documentData` parameter specifies the document data to be signed.
   */
  documentData: string;
  documentURL?: never;
}

export interface OpenWithDocumentURL extends OpenBase {
  /**
   * The `documentURL` parameter specifies the URL of the document to be signed.
   */
  documentURL: string;
  documentData?: never;
}

export type Open = OpenWithData | OpenWithDocumentURL;
