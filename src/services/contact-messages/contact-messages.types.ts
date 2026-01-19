import { sendContactMessageSchema } from '@services/contact-messages/contact-messages.schemas';
import z from 'zod';

export type SendContactMessageData = z.infer<typeof sendContactMessageSchema>;
export type SendContactMessageResponse = void;
