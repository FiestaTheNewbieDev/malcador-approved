'use client';

import { GitHubBadge } from '@components/badges/github-badge';
import { LinkedInBadge } from '@components/badges/linkedin-badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ICardProps,
} from '@components/ui/card';
import { cn } from '@lib/utils';
import { useProfile } from '@services/profiles/profiles.hooks';
import { useTranslations } from 'next-intl';
import { Profile } from 'optimus-package';

interface IProps extends ICardProps {
  linkedIn: Profile['linkedIn'];
  gitHub: Profile['gitHub'];
}

export const ContactLinksCard: React.FC<IProps> = ({
  className,
  linkedIn,
  gitHub,
  ...props
}) => {
  const t = useTranslations('contactPage.contactLinks');

  return (
    <Card variant="transparent" className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        {!!linkedIn.profileUrl && (
          <LinkedInBadge href={linkedIn.profileUrl} target="_blank" />
        )}
        {!!gitHub.profileUrl && (
          <GitHubBadge href={gitHub.profileUrl} target="_blank" />
        )}
      </CardContent>
    </Card>
  );
};

export const ConnectedContactLinksCard: React.FC<
  Omit<IProps, 'linkedIn' | 'gitHub'>
> = (props) => {
  const { data: profile } = useProfile();

  if (!profile) return null;

  return (
    <ContactLinksCard
      linkedIn={profile.linkedIn}
      gitHub={profile.gitHub}
      {...props}
    />
  );
};
