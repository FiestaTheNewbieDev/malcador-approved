export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALES_MAPPING: Record<
  Locale,
  {
    label: string;
    flag: string;
  }
> = {
  en: {
    label: 'English',
    flag: '🇬🇧',
  },
  fr: {
    label: 'Français',
    flag: '🇫🇷',
  },
};
