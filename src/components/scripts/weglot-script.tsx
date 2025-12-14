'use client';

import { ENABLE_WEGLOT, NEXT_PUBLIC_WEGLOT_API_KEY } from '@lib/env';
import Script from 'next/script';

const WeglotScript: React.FC = () => {
  function handleScriptLoad() {
    if (!ENABLE_WEGLOT) return;

    console.debug('Weglot script loaded');
    console.debug('Weglot API Key:', NEXT_PUBLIC_WEGLOT_API_KEY);

    if (window.Weglot !== undefined) {
      console.debug('Weglot object found:', window.Weglot);

      const apiKey = NEXT_PUBLIC_WEGLOT_API_KEY;
      if (!apiKey) {
        console.error(
          'Weglot API key is missing. Please set NEXT_PUBLIC_WEGLOT_API_KEY in your environment.',
        );
        return;
      }
      window.Weglot.initialize({
        api_key: apiKey,
        hide_switcher: true,
      });

      console.debug('Weglot initialized');
    } else {
      console.error('Weglot object not found');
    }
  }

  function handleScriptError(error: Error) {
    console.error('Error loading Weglot script:', error);
  }

  return (
    <Script
      src="https://cdn.weglot.com/weglot.min.js"
      strategy="afterInteractive"
      onLoad={handleScriptLoad}
      onError={handleScriptError}
    />
  );
};

export default WeglotScript;
