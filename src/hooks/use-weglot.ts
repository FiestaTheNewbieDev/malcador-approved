'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

interface UseWeglotReturn {
  isReady: boolean;
  currentLang: Nullable<string>;
  availableLanguages: string[];
  switchTo: (code: string) => void;
  getLanguageName: (code: string) => Nullable<string>;
  getBestAvailableLanguage: () => Nullable<string>;
  weglot: Nullable<typeof window.Weglot>;
}

let weglotListeners: Array<() => void> = [];
let weglotSnapshot: { isReady: boolean; currentLang: Nullable<string> } = {
  isReady: false,
  currentLang: null,
};

function subscribe(listener: () => void) {
  weglotListeners = [...weglotListeners, listener];
  return () => {
    weglotListeners = weglotListeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return weglotSnapshot;
}

const serverSnapshot = { isReady: false, currentLang: null } as const;

function getServerSnapshot() {
  return serverSnapshot;
}

function emitChange() {
  for (const listener of weglotListeners) {
    listener();
  }
}

function updateSnapshot(updates: Partial<typeof weglotSnapshot>) {
  weglotSnapshot = { ...weglotSnapshot, ...updates };
  emitChange();
}

export function useWeglot(): UseWeglotReturn {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);

  useEffect(() => {
    const weglot = window.Weglot;

    if (!weglot) {
      const checkInterval = setInterval(() => {
        if (window.Weglot?.initialized) {
          clearInterval(checkInterval);
          initializeListeners();
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }

    if (weglot.initialized) {
      initializeListeners();
    }

    function initializeListeners() {
      const wg = window.Weglot;
      if (!wg) return;

      updateSnapshot({
        isReady: true,
        currentLang: wg.getCurrentLang(),
      });

      setAvailableLanguages(wg.getAvailableLanguages() || []);

      const handleLanguageChanged = (newLang: string) => {
        updateSnapshot({ currentLang: newLang });
      };

      wg.on('languageChanged', handleLanguageChanged as () => void);

      return () => {
        wg.off('languageChanged', handleLanguageChanged as () => void);
      };
    }
  }, []);

  const switchTo = useCallback((code: string) => {
    window.Weglot?.switchTo(code);
  }, []);

  const getLanguageName = useCallback((code: string): Nullable<string> => {
    return window.Weglot?.getLanguageName(code) ?? null;
  }, []);

  const getBestAvailableLanguage = useCallback((): Nullable<string> => {
    return window.Weglot?.getBestAvailableLanguage() ?? null;
  }, []);

  return {
    isReady: state.isReady,
    currentLang: state.currentLang,
    availableLanguages,
    switchTo,
    getLanguageName,
    getBestAvailableLanguage,
    weglot: typeof window !== 'undefined' ? (window.Weglot ?? null) : null,
  };
}
