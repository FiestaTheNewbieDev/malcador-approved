import Sidebar from '@components/app/sidebar';
import LightRays from '@components/LightRays';
import { Fragment } from 'react/jsx-runtime';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <LightRays
        className="absolute"
        // followMouse={false}
        raysOrigin="top-center"
      />
      <Sidebar className="absolute top-1/2 left-4 -translate-y-1/2" />
      {children}
    </Fragment>
  );
};

export default Layout;
