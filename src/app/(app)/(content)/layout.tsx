import { DesktopNav, MobileNav } from '@components/app/navigation';
import { SidebarProvider } from '@components/ui/sidebar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider className="flex max-h-full max-w-full flex-col overflow-y-auto">
      <DesktopNav className="absolute top-1/2 left-4 z-10 -translate-y-1/2" />
      <MobileNav className="sticky top-0 z-10" />
      {children}
    </SidebarProvider>
  );
};

export default Layout;
