import LightRays from '@components/LightRays';
import { Fragment } from 'react/jsx-runtime';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <LightRays
        className="absolute"
        followMouse={false}
        raysOrigin="top-center"
      />
      {children}
    </Fragment>
  );
};

export default Layout;
