'use client';

import { triggerVariants } from '@components/app/sidebar/item';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useWeglot } from '@hooks/use-weglot';
import { cn, getWeglotClassName } from '@lib/utils';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { useCallback, useState } from 'react';

const LANGUAGES = {
  en: {
    flag: '🇬🇧',
    label: 'English',
  },
  fr: {
    flag: '🇫🇷',
    label: 'Français',
  },
} as const;

const getLangConfig = (lang: Nullable<string>) => {
  if (!lang) return null;
  return LANGUAGES[lang as keyof typeof LANGUAGES] ?? null;
};

const LangSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isReady, switchTo, currentLang, availableLanguages } = useWeglot();

  const langConfig = getLangConfig(currentLang);

  const handleSwitchLanguage = useCallback(
    (lang: string) => {
      if (!isReady) return;
      switchTo(lang);
    },
    [isReady, switchTo],
  );

  if (!isReady || !currentLang || !langConfig) return null;

  return (
    <li>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              'cursor-pointer select-none',
              triggerVariants({ active: open }),
              getWeglotClassName('no-translate'),
            )}
          >
            {langConfig.flag}
            <span className="sr-only">{langConfig.label}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          {availableLanguages.map((lang) => (
            <DropdownMenuItem
              key={lang}
              className={cn(
                'cursor-pointer',
                getWeglotClassName('no-translate'),
              )}
              onClick={() => handleSwitchLanguage(lang)}
            >
              <span>{getLangConfig(lang)?.flag}</span>
              <span>{getLangConfig(lang)?.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
};

export default LangSwitcher;
