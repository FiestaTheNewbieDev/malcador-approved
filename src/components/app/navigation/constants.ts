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
import ROUTES from '@routes/index';
import { INavItemProps } from './types';

export const NAV_ITEMS: INavItemProps[] = [
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
