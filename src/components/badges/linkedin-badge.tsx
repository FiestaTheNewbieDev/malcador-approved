'use client';

import { Badge, IBadgeProps } from '@components/ui/badge';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProfile } from '@services/profiles/profiles.hooks';
import Link from 'next/link';

interface IProps extends Omit<IBadgeProps, 'asChild'> {
  href: React.ComponentProps<typeof Link>['href'];
  target?: React.ComponentProps<typeof Link>['target'];
}

export const LinkedInBadge: React.FC<IProps> = ({
  href,
  target = '_blank',
  ...props
}) => (
  <Badge {...props} asChild>
    <Link href={href} target={target}>
      <FontAwesomeIcon icon={faLinkedin} />
      LinkedIn
    </Link>
  </Badge>
);

export const ConnectedLinkedInBadge: React.FC<Omit<IProps, 'href'>> = (
  props,
) => {
  const { data: profile } = useProfile();

  const profileUrl = profile?.linkedIn?.profileUrl;

  if (!profileUrl) return null;

  return <LinkedInBadge href={profileUrl} {...props} />;
};
