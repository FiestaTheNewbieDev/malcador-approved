import LightRays from '@components/LightRays';
import { LocaleProvider } from '@components/providers/locale-provider';
import ReactQueryProvider from '@components/providers/react-query-provider';
import { Toaster } from '@components/ui/sonner';
import { DOMAIN_NAME } from '@constants/index';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Locale, LOCALES } from '@i18n/config';
import { NODE_ENV } from '@lib/env';
import { cn } from '@lib/utils';
import { prefetchProfile } from '@services/profiles/profiles.hooks';
import '@styles/globals.css';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
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
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title', { domainName: DOMAIN_NAME }),
    description: t('description'),
  };
}

const AppLayout = async ({ children }: AppLayoutProps) => {
  const queryClient = new QueryClient();

  const locale = (await getLocale()) as Locale;
  const messages = await loadAllMessages();

  await prefetchProfile(queryClient);

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
            className="absolute -z-10"
            // followMouse={false}
            raysOrigin="top-center"
          />
          <ReactQueryProvider>
            <HydrationBoundary state={dehydrate(queryClient)}>
              {children}
              <Toaster />
            </HydrationBoundary>
          </ReactQueryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default AppLayout;
