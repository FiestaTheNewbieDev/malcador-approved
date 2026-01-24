import {
  FIRST_NAME_MAX_LENGTH,
  LAST_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MAX_LENGTH,
  PHONE_NUMBER_MAX_LENGTH,
} from 'optimus-package/schemas/contact-message.schema';
import { z } from 'zod';

export const sendContactMessageSchema = z.object({
  firstName: z.string().nonempty().max(FIRST_NAME_MAX_LENGTH),
  lastName: z.string().nonempty().max(LAST_NAME_MAX_LENGTH),
  organizationName: z.string().max(ORGANIZATION_NAME_MAX_LENGTH).optional(),
  email: z.email(),
  phoneNumber: z.string().max(PHONE_NUMBER_MAX_LENGTH).optional(),
  message: z.string().nonempty(),
});
