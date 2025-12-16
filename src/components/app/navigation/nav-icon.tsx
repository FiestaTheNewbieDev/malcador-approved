'use client';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isValidElement, useMemo } from 'react';

interface INavIconProps {
  icon: IconDefinition | React.ReactNode;
  activeIcon?: IconDefinition | React.ReactNode;
  isActive: boolean;
}

const NavIcon: React.FC<INavIconProps> = ({ icon, activeIcon, isActive }) => {
  const renderedIcon = useMemo(() => {
    const currentIcon = isActive && activeIcon ? activeIcon : icon;

    if (isValidElement(currentIcon)) {
      return currentIcon;
    }

    return <FontAwesomeIcon icon={currentIcon as IconDefinition} />;
  }, [isActive, icon, activeIcon]);

  return renderedIcon;
};

export default NavIcon;
