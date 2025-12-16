import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface INavItemProps {
  label: string;
  icon: IconDefinition | React.ReactNode;
  activeIcon?: IconDefinition | React.ReactNode;
  href: string;
  isActive: (pathname: string) => boolean;
  disabled?: boolean;
}
