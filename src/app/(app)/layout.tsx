import AppSidebar from '@components/layout/AppSidebar';
import { SidebarInset, SidebarProvider } from '@components/ui/sidebar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
