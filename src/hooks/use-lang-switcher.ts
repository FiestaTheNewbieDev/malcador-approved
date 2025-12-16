'use client';

import { useWeglot } from '@hooks/use-weglot';
import { useCallback } from 'react';

export const LANGUAGES = {
  en: {
    flag: '🇬🇧',
    label: 'English',
  },
  fr: {
    flag: '🇫🇷',
    label: 'Français',
  },
} as const;

export type LanguageCode = keyof typeof LANGUAGES;

export interface LanguageConfig {
  flag: string;
  label: string;
}

export const getLangConfig = (
  lang: Nullable<string>,
): LanguageConfig | null => {
  if (!lang) return null;
  return LANGUAGES[lang as LanguageCode] ?? null;
};

interface UseLangSwitcherReturn {
  isReady: boolean;
  currentLang: Nullable<string>;
  currentLangConfig: LanguageConfig | null;
  availableLanguages: string[];
  switchLanguage: (lang: string) => void;
  getLangConfig: typeof getLangConfig;
}

export function useLangSwitcher(): UseLangSwitcherReturn {
  const { isReady, switchTo, currentLang, availableLanguages } = useWeglot();

  const currentLangConfig = getLangConfig(currentLang);

  const switchLanguage = useCallback(
    (lang: string) => {
      if (!isReady) return;
      switchTo(lang);
    },
    [isReady, switchTo],
  );

  return {
    isReady,
    currentLang,
    currentLangConfig,
    availableLanguages,
    switchLanguage,
    getLangConfig,
  };
}
