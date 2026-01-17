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
import { useLocaleSwitcher } from '@hooks/use-locale-switcher';
import { cn } from '@lib/utils';
import { useState } from 'react';

const MobileLangSwitcher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const {
    availableLocales,
    currentLocaleConfig,
    getLocaleConfig,
    switchLocale,
  } = useLocaleSwitcher();

  if (!availableLocales.length) return null;

  return (
    <SidebarMenuItem>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton isActive={open}>
            <span>{currentLocaleConfig.flag}</span>
            <span>{currentLocaleConfig.label}</span>
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
          className="w-[var(--radix-popper-anchor-width)]"
        >
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
    </SidebarMenuItem>
  );
};

export default MobileLangSwitcher;
