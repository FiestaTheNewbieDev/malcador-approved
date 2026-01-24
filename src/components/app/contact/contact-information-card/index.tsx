'use client';

import { InformationRow } from '@components/app/contact/contact-information-card/information-row';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ICardProps,
} from '@components/ui/card';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@lib/utils';
import ROUTES from '@routes/index';
import { useProfile } from '@services/profiles/profiles.hooks';
import { useTranslations } from 'next-intl';

interface IProps extends ICardProps {
  email?: string;
  phoneNumber?: string;
  location?: string;
}

export const ContactInformationCard: React.FC<IProps> = ({
  className,
  email,
  phoneNumber,
  location,
  ...props
}) => {
  const t = useTranslations('contactPage.contactInformation');

  return (
    <Card variant="transparent" className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {!!email && (
          <InformationRow
            icon={faEnvelope}
            text={email}
            href={ROUTES.externals.email(email)}
          />
        )}
        {!!phoneNumber && (
          <InformationRow
            icon={faPhone}
            text={phoneNumber}
            href={ROUTES.externals.phone(phoneNumber)}
          />
        )}
        {!!location && (
          <InformationRow
            icon={faLocation}
            text={location}
            href={ROUTES.externals.googleMaps(location)}
            target="_blank"
          />
        )}
      </CardContent>
    </Card>
  );
};

export const ConnectedInformationCard: React.FC<Omit<IProps, 'email'>> = (
  props,
) => {
  const { data: profile } = useProfile();

  if (!profile) return null;

  return (
    <ContactInformationCard
      email={profile.contactEmail || undefined}
      phoneNumber={profile.contactPhoneNumber || undefined}
      location={profile.location || undefined}
      {...props}
    />
  );
};
