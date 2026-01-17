import { useLocaleContext } from '@components/providers/locale-provider';
import { LOCALES, LOCALES_MAPPING, Locale } from '@i18n/config';
import { useCallback, useMemo } from 'react';

export const useLocaleSwitcher = () => {
  const { locale: currentLocale, setLocale } = useLocaleContext();

  const switchLocale = useCallback(
    (locale: Locale) => {
      setLocale(locale);
    },
    [setLocale],
  );

  const getLocaleConfig = useCallback(
    (locale: Locale) => LOCALES_MAPPING[locale],
    [],
  );

  const currentLocaleConfig = useMemo(
    () => getLocaleConfig(currentLocale),
    [currentLocale, getLocaleConfig],
  );

  return {
    currentLocale,
    currentLocaleConfig,
    switchLocale,
    availableLocales: LOCALES,
    getLocaleConfig,
  };
};
