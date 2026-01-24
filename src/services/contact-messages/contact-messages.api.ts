import requester from '@lib/requester';
import * as Types from './contact-messages.types';

export const sendContactMessage = (
  profileUuid: string,
  data: Types.SendContactMessageData,
) =>
  requester().post<Types.SendContactMessageResponse>(
    `/profiles/${profileUuid}/contact-messages`,
    data,
  );
