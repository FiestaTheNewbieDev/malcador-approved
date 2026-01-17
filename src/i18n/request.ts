import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { DEFAULT_LOCALE, Locale, LOCALES } from './config';

export const LOCALE_COOKIE_NAME = 'locale';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  let locale: Locale = DEFAULT_LOCALE;
  if (localeCookie && LOCALES.includes(localeCookie as Locale)) {
    locale = localeCookie as Locale;
  }

  return {
    locale,
    messages: (await import(`@messages/${locale}.json`)).default,
  };
});
