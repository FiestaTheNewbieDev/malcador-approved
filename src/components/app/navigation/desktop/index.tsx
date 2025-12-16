'use client';

import { useIsMobile } from '@hooks/use-mobile';
import { cn } from '@lib/utils';
import { NAV_ITEMS } from '../constants';
import DesktopNavItem from './item';
import DesktopLangSwitcher from './lang-switcher';

interface IProps {
  className?: string;
}

const DesktopNav: React.FC<IProps> = ({ className }) => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <aside
      className={cn('h-fit w-fit', className)}
      aria-label="Main navigation"
    >
      <nav>
        <ul
          className="border-sidebar-border flex h-fit flex-col gap-2 rounded-full border bg-transparent p-2"
          role="list"
        >
          {NAV_ITEMS.map((item, index) => (
            <DesktopNavItem key={index} {...item} />
          ))}
          <DesktopLangSwitcher />
        </ul>
      </nav>
    </aside>
  );
};

export default DesktopNav;
