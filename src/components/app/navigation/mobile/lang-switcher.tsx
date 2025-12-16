'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { SidebarMenuButton, SidebarMenuItem } from '@components/ui/sidebar';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLangSwitcher } from '@hooks/use-lang-switcher';
import { cn, getWeglotClassName } from '@lib/utils';
import { useState } from 'react';

const MobileLangSwitcher: React.FC = () => {
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
    <SidebarMenuItem>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            isActive={open}
            className={getWeglotClassName('no-translate')}
          >
            <span>{currentLangConfig.flag}</span>
            <span>{currentLangConfig.label}</span>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={cn(
                'ml-auto transition-transform duration-200',
                open ? 'rotate-180' : 'rotate-0',
              )}
            />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          className="w-[--radix-popper-anchor-width]"
        >
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
    </SidebarMenuItem>
  );
};

export default MobileLangSwitcher;
