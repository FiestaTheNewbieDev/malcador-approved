import ReactQueryProvider from '@components/providers/ReactQueryProvider';
import WeglotScript from '@components/scripts/WeglotScript';
import { OWNER_FULL_NAME } from '@constants/index';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
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
    <html lang="fr">
      <head>
        <WeglotScript />
      </head>
      <body className={cn(inter.className)}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
