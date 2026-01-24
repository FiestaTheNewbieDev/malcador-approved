'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@components/ui/tooltip';
import { cva } from 'class-variance-authority';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import NavIcon from '../nav-icon';
import { NavItem } from '../types';

const DEFAULT_DELAY_DURATION = 200;

export const triggerVariants = cva(
  `border-sidebar-border flex aspect-square h-12 w-12 items-center justify-center rounded-full border transition-colors duration-${DEFAULT_DELAY_DURATION} active:ring-0 select-none backdrop-blur-sm`,
  {
    variants: {
      active: {
        true: 'bg-sidebar-accent text-sidebar-accent-foreground',
        false: 'bg-transparent text-sidebar-foreground',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false:
          'cursor-pointer hover:text-sidebar-accent-foreground hover:scale-110 hover:bg-sidebar-accent',
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  },
);

const DesktopNavItem: React.FC<NavItem> = ({
  label,
  icon,
  activeIcon,
  href,
  isActive,
  disabled,
}) => {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const active = useMemo(() => isActive(pathname), [isActive, pathname]);

  return (
    <li>
      <Tooltip delayDuration={DEFAULT_DELAY_DURATION}>
        <TooltipTrigger asChild>
          {disabled ? (
            <button className={triggerVariants({ active, disabled })} disabled>
              <NavIcon icon={icon} activeIcon={activeIcon} isActive={active} />
              <span className="sr-only">{t(label)}</span>
            </button>
          ) : (
            <Link
              className={triggerVariants({ active })}
              href={href}
              aria-label={t(label)}
              aria-current={active ? 'page' : undefined}
            >
              <NavIcon icon={icon} activeIcon={activeIcon} isActive={active} />
              <span className="sr-only">{t(label)}</span>
            </Link>
          )}
        </TooltipTrigger>
        <TooltipContent className="side-right" side="right">
          {t(label)}
        </TooltipContent>
      </Tooltip>
    </li>
  );
};

export default DesktopNavItem;
