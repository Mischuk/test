import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Library from './components/Library/Library';
import { Language, Open, OpenWithData, OpenWithDocumentURL } from './types';
import { I18nProvider } from './services/i18n';
import './assets/fonts.css';

function lockRootScrollbar(state: 'auto' | 'hidden') {
  const rootElement = document.documentElement;
  rootElement.style.overflow = state;
}

class SignWidget {
  private mountPoints: Map<string, Root>;
  private nodeId: string;
  private onClose: (event: string) => void;

  constructor(nodeId: string, options?: { onClose?: (event: string) => void }) {
    this.mountPoints = new Map();
    this.nodeId = nodeId;
    this.onClose = options?.onClose || (() => {});
  }

  open(openParams: Open) {
    const {
      callbackURL,
      lang = Language.EN,
      providers,
      redirectURL,
      documentURL = '',
      documentData = '',
      actorId,
    } = openParams;

    const propsDocumentURL: OpenWithDocumentURL = {
      callbackURL,
      lang,
      providers,
      redirectURL,
      documentURL,
      actorId,
    };

    const propsDocumentData: OpenWithData = {
      callbackURL,
      lang,
      providers,
      redirectURL,
      documentData,
      actorId,
    };

    const isDocumentURL = 'documentURL' in openParams && openParams.documentURL;
    const isDocumentData = 'documentData' in openParams && openParams.documentData;

    if (!isDocumentURL && !isDocumentData) {
      console.error('Invalid open params. You must specify either "documentURL" or "data"');
      return;
    }

    lockRootScrollbar('hidden');

    const container = document.getElementById(this.nodeId);
    if (container) {
      if (this.mountPoints.has(this.nodeId)) {
        const root = this.mountPoints.get(this.nodeId);
        root?.unmount();
        this.mountPoints.delete(this.nodeId);
      }

      const root = createRoot(container);
      const unmount = (redirectURL?: string) => {
        this.onClose('close event');
        lockRootScrollbar('auto');
        root.unmount();
        this.mountPoints.delete(this.nodeId);

        if (redirectURL) {
          window.location.href = redirectURL;
        }
      };

      root.render(
        <I18nProvider value={lang}>
          <Library unmount={unmount} {...(isDocumentURL ? propsDocumentURL : propsDocumentData)} />
        </I18nProvider>
      );
      this.mountPoints.set(this.nodeId, root);
    } else {
      console.error(`Element with id "${this.nodeId}" not found.`);
    }
  }

  close() {
    lockRootScrollbar('auto');

    const container = document.getElementById(this.nodeId);
    if (container && this.mountPoints.has(this.nodeId)) {
      const root = this.mountPoints.get(this.nodeId);
      this.onClose('destroy event');
      root?.unmount();
      this.mountPoints.delete(this.nodeId);
    } else {
      console.error(`Element with id "${this.nodeId}" not found or not mounted.`);
    }
  }
}

if (typeof window !== 'undefined') {
  (window as any).SignWidget = SignWidget;
}

export { SignWidget };
