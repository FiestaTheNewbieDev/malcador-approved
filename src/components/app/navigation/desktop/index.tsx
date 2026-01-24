'use client';

import { Card } from '@components/ui/card';
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
      <Card variant="transparent" asChild className="h-fit rounded-full p-2">
        <nav>
          <ul className="flex flex-col gap-2" role="list">
            {NAV_ITEMS.map((item, index) => (
              <DesktopNavItem key={index} {...item} />
            ))}
            <DesktopLangSwitcher />
          </ul>
        </nav>
      </Card>
    </aside>
  );
};

export default DesktopNav;
