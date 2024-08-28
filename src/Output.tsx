import React from 'react';
import { I18nProvider } from './services/i18n';
import Develop from './components/Develop/Develop';

function Output() {
  return (
    <I18nProvider>
      <Develop />
    </I18nProvider>
  );
}

export default Output;
