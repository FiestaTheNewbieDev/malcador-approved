'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useLangSwitcher } from '@hooks/use-lang-switcher';
import { cn, getWeglotClassName } from '@lib/utils';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { triggerVariants } from './item';

const DesktopLangSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const {
    isReady,
    currentLangConfig,
    availableLanguages,
    switchLanguage,
    getLangConfig,
  } = useLangSwitcher();

  if (!isReady || !currentLangConfig) return null;

  return (
    <li>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className={cn(
            triggerVariants({ active: open }),
            getWeglotClassName('no-translate'),
          )}
        >
          {currentLangConfig.flag}
          <span className="sr-only">{currentLangConfig.label}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          {availableLanguages.map((lang) => {
            const config = getLangConfig(lang);
            return (
              <DropdownMenuItem
                key={lang}
                className={cn(
                  'cursor-pointer',
                  getWeglotClassName('no-translate'),
                )}
                onClick={() => switchLanguage(lang)}
              >
                <span>{config?.flag}</span>
                <span>{config?.label}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
};

export default DesktopLangSwitcher;
