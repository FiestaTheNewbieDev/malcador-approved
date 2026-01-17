'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useLocaleSwitcher } from '@hooks/use-locale-switcher';
import { cn } from '@lib/utils';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { triggerVariants } from './item';

const DesktopLangSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const {
    currentLocaleConfig,
    availableLocales,
    getLocaleConfig,
    switchLocale,
  } = useLocaleSwitcher();

  if (!availableLocales.length) return null;

  return (
    <li>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className={cn(triggerVariants({ active: open }))}>
          {currentLocaleConfig.flag}
          <span className="sr-only">{currentLocaleConfig.label}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          {availableLocales.map((locale) => {
            const config = getLocaleConfig(locale);
            return (
              <DropdownMenuItem
                key={locale}
                className={cn('cursor-pointer')}
                onClick={() => switchLocale(locale)}
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
