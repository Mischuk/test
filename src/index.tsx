import React from 'react';
import ReactDOM from 'react-dom/client';
import Develop from './components/Develop/Develop';
import { I18nProvider } from './services/i18n';
import './assets/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <I18nProvider>
    <Develop />
  </I18nProvider>
);
