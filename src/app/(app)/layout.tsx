import { DesktopNav, MobileNav } from '@components/app/navigation';
import LightRays from '@components/LightRays';
import { SidebarProvider } from '@components/ui/sidebar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider className="flex-col">
      <LightRays
        className="absolute"
        // followMouse={false}
        raysOrigin="top-center"
      />
      <DesktopNav className="absolute top-1/2 left-4 -translate-y-1/2" />
      <MobileNav className="sticky top-0" />
      {children}
    </SidebarProvider>
  );
};

export default Layout;
