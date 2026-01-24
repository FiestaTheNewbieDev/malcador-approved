'use client';

import { Button } from '@components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  ICardProps,
} from '@components/ui/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { PhoneInput } from '@components/ui/input/phone-input';
import { Textarea } from '@components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@lib/utils';
import { useSendMessage } from '@services/contact-messages/contact-messages.hooks';
import { sendContactMessageSchema } from '@services/contact-messages/contact-messages.schemas';
import { useProfile } from '@services/profiles/profiles.hooks';
import { useTranslations } from 'next-intl';
import {
  FIRST_NAME_MAX_LENGTH,
  LAST_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MAX_LENGTH,
  PHONE_NUMBER_MAX_LENGTH,
} from 'optimus-package/schemas/contact-message.schema';
import { useForm } from 'react-hook-form';
import z from 'zod';

interface IProps extends ICardProps {
  targetProfileUuid: string;
}

type FormValues = z.infer<typeof sendContactMessageSchema>;

export const ContactFormCard: React.FC<IProps> = ({
  className,
  targetProfileUuid,
  ...props
}) => {
  const t = useTranslations('contactPage.contactForm');
  const form = useForm<FormValues>({
    resolver: zodResolver(sendContactMessageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      organizationName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
  });
  const { mutate: sendContactMessage, isPending } = useSendMessage();

  function onSubmit(values: FormValues) {
    if (isPending) return;

    sendContactMessage({
      profileUuid: targetProfileUuid,
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        organizationName: values.organizationName || undefined,
        email: values.email,
        phoneNumber: values.phoneNumber || undefined,
        message: values.message,
      },
    });
  }

  return (
    <Card variant="transparent" className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="contact-form"
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{t('fields.firstName.label')}*</FormLabel>
                    <Input {...field} autoComplete="given-name" />
                    {!!fieldState.error?.message && (
                      <FormMessage>
                        {t(fieldState.error?.message, {
                          max: FIRST_NAME_MAX_LENGTH,
                        })}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>{t('fields.lastName.label')}*</FormLabel>
                    <Input {...field} autoComplete="family-name" />
                    {!!fieldState.error?.message && (
                      <FormMessage>
                        {t(fieldState.error?.message, {
                          max: LAST_NAME_MAX_LENGTH,
                        })}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="organizationName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('fields.organizationName.label')}</FormLabel>
                  <Input {...field} autoComplete="organization" />
                  {!!fieldState.error?.message && (
                    <FormMessage>
                      {t(fieldState.error?.message, {
                        max: ORGANIZATION_NAME_MAX_LENGTH,
                      })}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('fields.email.label')}*</FormLabel>
                  <Input {...field} autoComplete="work email" />
                  {!!fieldState.error?.message && (
                    <FormMessage>{t(fieldState.error?.message)}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('fields.phoneNumber.label')}</FormLabel>
                  <PhoneInput {...field} />
                  {!!fieldState.error?.message && (
                    <FormMessage>
                      {t(fieldState.error?.message, {
                        max: PHONE_NUMBER_MAX_LENGTH,
                      })}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>{t('fields.message.label')}*</FormLabel>
                  <Textarea
                    className="resize-none overflow-y-auto"
                    {...field}
                  />
                  {!!fieldState.error?.message && (
                    <FormMessage>{t(fieldState.error?.message)}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          type="submit"
          form="contact-form"
          disabled={isPending}
        >
          {t('buttons.submit.label')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ConnectedContactFormCard: React.FC<
  Omit<IProps, 'targetProfileUuid'>
> = ({ className, ...props }) => {
  const { data: profile } = useProfile();

  if (!profile) return null;

  return (
    <ContactFormCard
      targetProfileUuid={profile.uuid}
      className={className}
      {...props}
    />
  );
};
