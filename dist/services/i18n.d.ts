import { ReactNode, FC } from 'react';
import en from '../locales/en/translation.json';
import { Language } from '../types';
type Messages = typeof en;
interface I18nContextProps {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: keyof Messages) => string;
}
export declare const I18nProvider: FC<{
    children: ReactNode;
    value?: Language;
}>;
export declare const useTranslation: () => I18nContextProps;
export {};
