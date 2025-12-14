'use client';

import SidebarItem, { ISidebarItemProps } from '@components/app/sidebar/item';
import LangSwitcher from '@components/app/sidebar/lang-switcher';
import {
  faAddressBook as faAddressBookRegular,
  faCircleUser as faCircleUserRegular,
  faFolder as faFolderRegular,
  faHome as faHomeRegular,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAddressBook as faAddressBookSolid,
  faCircleUser as faCircleUserSolid,
  faFolder as faFolderSolid,
  faHome as faHomeSolid,
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '@lib/utils';
import ROUTES from '@routes/index';

interface IProps {
  className?: string;
}

const NAV_ITEMS: ISidebarItemProps[] = [
  {
    label: 'Home',
    icon: faHomeRegular,
    activeIcon: faHomeSolid,
    href: ROUTES.app(),
    isActive: (pathname) => pathname === ROUTES.app(),
  },
  {
    label: 'About',
    icon: faCircleUserRegular,
    activeIcon: faCircleUserSolid,
    href: ROUTES.app.about(),
    isActive: (pathname) => pathname.startsWith(ROUTES.app.about()),
  },
  {
    label: 'Projects',
    icon: faFolderRegular,
    activeIcon: faFolderSolid,
    href: ROUTES.app.projects(),
    isActive: (pathname) => pathname.startsWith(ROUTES.app.projects()),
  },
  {
    label: 'Contact',
    icon: faAddressBookRegular,
    activeIcon: faAddressBookSolid,
    href: ROUTES.app.contact(),
    isActive: (pathname) => pathname.startsWith(ROUTES.app.contact()),
  },
] as const;

const Sidebar: React.FC<IProps> = ({ className }) => (
  <aside className={cn('h-fit w-fit', className)} aria-label="Main navigation">
    <nav>
      <ul
        className="border-sidebar-border flex h-fit flex-col gap-2 rounded-full border bg-transparent p-2"
        role="list"
      >
        {NAV_ITEMS.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
        <LangSwitcher />
      </ul>
    </nav>
  </aside>
);
export default Sidebar;
