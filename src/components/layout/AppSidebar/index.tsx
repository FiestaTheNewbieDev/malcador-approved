import { Collapsible, CollapsibleTrigger } from '@components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/ui/sidebar';
import {
  faAddressBook,
  faBook,
  faCircleUser,
  faHome,
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ROUTES from '@routes/index';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    title: 'Home',
    href: ROUTES.app(),
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    title: 'About me',
    href: ROUTES.app.about(),
    icon: <FontAwesomeIcon icon={faCircleUser} />,
  },
  {
    title: 'My Projects',
    href: ROUTES.app.projects(),
    icon: <FontAwesomeIcon icon={faPaintBrush} />,
  },
  {
    title: 'Skills',
    href: ROUTES.app.skills(),
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  {
    title: 'Contact',
    href: ROUTES.app.contact(),
    icon: <FontAwesomeIcon icon={faAddressBook} />,
  },
];

const AppSidebar: React.FC<React.ComponentProps<typeof Sidebar>> = ({
  ...props
}) => (
  <Sidebar collapsible="icon" {...props}>
    {/* <SidebarHeader className="flex h-16 flex-col justify-center">
      <SidebarMenu>
        <Collapsible asChild className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip="Clement Dev" asChild>
                <Link href={ROUTES.app()}>
                  <SidebarTrigger />
                  <span>Clement Dev</span>
                </Link>
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarHeader> */}
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          {NAV_ITEMS.map((item, index) => (
            <Collapsible key={index} asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
);

export default AppSidebar;
