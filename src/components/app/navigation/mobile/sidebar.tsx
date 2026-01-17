'use client';

import MobileLangSwitcher from '@components/app/navigation/mobile/lang-switcher';
import { Separator } from '@components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from '@components/ui/sidebar';
import { DOMAIN_NAME } from '@constants/index';
import { useIsMobile } from '@hooks/use-mobile';
import Link from 'next/link';
import { NAV_ITEMS } from '../constants';
import MobileNavItem from './item';

const MobileNavSidebar: React.FC = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/">{DOMAIN_NAME}</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {NAV_ITEMS.map((item, index) => (
              <MobileNavItem key={index} {...item} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <SidebarMenu>
          <MobileLangSwitcher />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MobileNavSidebar;
