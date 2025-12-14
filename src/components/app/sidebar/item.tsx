'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@components/ui/tooltip';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isValidElement, useMemo } from 'react';

const DEFAULT_DELAY_DURATION = 200;

export const triggerVariants = cva(
  `border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex aspect-square h-12 w-12 items-center justify-center rounded-full border transition-colors duration-${DEFAULT_DELAY_DURATION} hover:scale-110 active:ring-0`,
  {
    variants: {
      active: {
        true: 'bg-sidebar-accent text-sidebar-accent-foreground',
        false: 'bg-transparent text-sidebar-foreground',
      },
    },
  },
);

export interface ISidebarItemProps {
  label: string;
  icon: IconDefinition | React.ReactNode;
  activeIcon?: IconDefinition | React.ReactNode;
  href: string;
  isActive: (pathname: string) => boolean;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  label,
  icon,
  activeIcon,
  href,
  isActive,
}) => {
  const pathname = usePathname();

  const active = useMemo(() => isActive(pathname), [isActive, pathname]);

  const Icon = useMemo(() => {
    if (active && !!activeIcon) {
      if (isValidElement(activeIcon)) {
        return activeIcon;
      }
      return <FontAwesomeIcon icon={activeIcon as IconDefinition} />;
    } else {
      if (isValidElement(icon)) {
        return icon;
      }
      return <FontAwesomeIcon icon={icon as IconDefinition} />;
    }
  }, [active, icon, activeIcon]);

  return (
    <li>
      <Tooltip delayDuration={DEFAULT_DELAY_DURATION}>
        <TooltipTrigger asChild>
          <Link
            className={triggerVariants({ active })}
            href={href}
            aria-label={label}
            aria-current={active ? 'page' : undefined}
          >
            {Icon}
            <span className="sr-only">{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="side-right" side="right">
          {label}
        </TooltipContent>
      </Tooltip>
    </li>
  );
};

export default SidebarItem;
