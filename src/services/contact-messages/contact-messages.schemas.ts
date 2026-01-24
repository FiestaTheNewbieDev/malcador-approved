import {
  FIRST_NAME_MAX_LENGTH,
  LAST_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MAX_LENGTH,
  PHONE_NUMBER_MAX_LENGTH,
} from 'optimus-package/schemas/contact-message.schema';
import { z } from 'zod';

export const sendContactMessageSchema = z.object({
  firstName: z
    .string()
    .nonempty({
      message: 'fields.firstName.errors.nonempty',
    })
    .max(FIRST_NAME_MAX_LENGTH, {
      message: 'fields.firstName.errors.maxLength',
    }),
  lastName: z
    .string()
    .nonempty({
      message: 'fields.lastName.errors.nonempty',
    })
    .max(LAST_NAME_MAX_LENGTH, {
      message: 'fields.lastName.errors.maxLength',
    }),
  organizationName: z
    .string()
    .max(ORGANIZATION_NAME_MAX_LENGTH, {
      message: 'fields.organizationName.errors.maxLength',
    })
    .optional(),
  email: z.email({ message: 'fields.email.errors.invalid' }),
  phoneNumber: z
    .string()
    .max(PHONE_NUMBER_MAX_LENGTH, {
      message: 'fields.phoneNumber.errors.maxLength',
    })
    .optional(),
  message: z.string().nonempty({
    message: 'fields.message.errors.nonempty',
  }),
});
