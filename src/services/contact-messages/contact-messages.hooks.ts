import { RequesterError } from '@lib/requester';
import { useMutation } from '@tanstack/react-query';
import * as API from './contact-messages.api';
import * as Types from './contact-messages.types';

const MUTATION_KEYS = {
  sendMessage: () => ['contact-messages', 'send-message'],
} as const;

interface ISendMessageVariables {
  profileUuid: string;
  data: Types.SendContactMessageData;
}

export const useSendMessage = () =>
  useMutation<
    Types.SendContactMessageResponse,
    RequesterError,
    ISendMessageVariables
  >({
    mutationKey: MUTATION_KEYS.sendMessage(),
    mutationFn: async ({ profileUuid, data }) =>
      API.sendContactMessage(profileUuid, data),
  });
