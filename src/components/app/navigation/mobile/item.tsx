'use client';

import { SidebarMenuButton, SidebarMenuItem } from '@components/ui/sidebar';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import NavIcon from '../nav-icon';
import { NavItem } from '../types';

const MobileNavItem: React.FC<NavItem> = ({
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
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link href={href}>
          <NavIcon icon={icon} activeIcon={activeIcon} isActive={active} />
          <span>{t(label)}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default MobileNavItem;
