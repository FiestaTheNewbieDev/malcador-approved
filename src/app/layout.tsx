import ReactQueryProvider from '@components/providers/react-query-provider';
import WeglotScript from '@components/scripts/weglot-script';
import { OWNER_FULL_NAME } from '@constants/index';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NODE_ENV } from '@lib/env';
import { cn } from '@lib/utils';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: OWNER_FULL_NAME,
};

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <WeglotScript />
      </head>
      <body
        className={cn(
          'bg-background relative h-screen w-screen overflow-hidden',
          inter.className,
        )}
        // Remove hydration warning in development
        {...(NODE_ENV === 'development' && {
          suppressHydrationWarning: true,
        })}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
