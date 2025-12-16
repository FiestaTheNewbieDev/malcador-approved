'use client';

import { SidebarMenuButton, SidebarMenuItem } from '@components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import NavIcon from '../nav-icon';
import { INavItemProps } from '../types';

const MobileNavItem: React.FC<INavItemProps> = ({
  label,
  icon,
  activeIcon,
  href,
  isActive,
  disabled,
}) => {
  const pathname = usePathname();

  const active = useMemo(() => isActive(pathname), [isActive, pathname]);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link href={href}>
          <NavIcon icon={icon} activeIcon={activeIcon} isActive={active} />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default MobileNavItem;
