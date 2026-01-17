import LightRays from '@components/LightRays';
import { LocaleProvider } from '@components/providers/locale-provider';
import ReactQueryProvider from '@components/providers/react-query-provider';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Locale, LOCALES } from '@i18n/config';
import { NODE_ENV } from '@lib/env';
import { cn } from '@lib/utils';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { AbstractIntlMessages } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

config.autoAddCss = false;

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

type AppLayoutProps = PropsWithChildren;

const loadAllMessages = async (): Promise<
  Record<Locale, AbstractIntlMessages>
> => {
  const messages = {} as Record<Locale, AbstractIntlMessages>;
  for (const locale of LOCALES) {
    messages[locale] = (await import(`@messages/${locale}.json`)).default;
  }
  return messages;
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'metadata',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const AppLayout = async ({ children }: AppLayoutProps) => {
  const locale = (await getLocale()) as Locale;
  const messages = await loadAllMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'bg-background dark relative h-screen w-screen overflow-hidden',
          inter.className,
        )}
        // Remove hydration warning in development
        {...(NODE_ENV === 'development' && {
          suppressHydrationWarning: true,
        })}
      >
        <LocaleProvider initialLocale={locale} messages={messages}>
          <LightRays
            className="absolute"
            // followMouse={false}
            raysOrigin="top-center"
          />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default AppLayout;
