'use client';

import { useSidebar } from '@components/ui/sidebar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@lib/utils';
import { Fragment } from 'react/jsx-runtime';
import { triggerVariants } from '../desktop/item';
import MobileNavSidebar from './sidebar';

interface IProps {
  className?: string;
}

const MobileNav: React.FC<IProps> = ({ className }) => {
  const { isMobile, toggleSidebar } = useSidebar();

  if (!isMobile) return null;

  return (
    <Fragment>
      <header className={cn('p-4', className)}>
        <nav className="flex items-center justify-end">
          <button className={triggerVariants()} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </header>
      <MobileNavSidebar />
    </Fragment>
  );
};

export default MobileNav;
