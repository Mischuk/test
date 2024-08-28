import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import en from '../locales/en/translation.json';
import ua from '../locales/ua/translation.json';
import { Language } from '../types';
import { CONFIG } from '../config';

type Messages = typeof en;

interface I18nContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Messages) => string;
}

const I18nContext = createContext<I18nContextProps>({
  language: Language.EN,
  setLanguage: () => {},
  t: (key) => key,
});

const languages: { [key: string]: Messages } = { en, ua };

export const I18nProvider: FC<{ children: ReactNode; value?: Language }> = ({
  children,
  value,
}) => {
  const [language, setLanguage] = useState(value || CONFIG.DEFAULT_LANG);

  const t = (key: keyof Messages): string => {
    return languages[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
