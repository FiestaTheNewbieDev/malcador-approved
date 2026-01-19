import { RequesterError } from '@lib/requester';
import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';
import * as API from './profiles.api';
import * as Types from './profiles.types';

const QUERY_KEYS = {
  profile: () => ['profile'],
} as const;

type ProfileOptions = Omit<
  UseQueryOptions<
    Types.GetProfilesResponse,
    RequesterError,
    Types.GetProfilesResponse['profiles'][0]
  >,
  'queryKey' | 'queryFn'
>;

const PROFILE_DEFAULT_OPTIONS: ProfileOptions = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 15 * 60 * 1000, // 15 minutes
  refetchOnWindowFocus: false,
};

export const useProfile = (options: ProfileOptions = {}) =>
  useQuery<
    Types.GetProfilesResponse,
    RequesterError,
    Types.GetProfilesResponse['profiles'][0]
  >({
    queryKey: QUERY_KEYS.profile(),
    queryFn: () => API.getProfile(),
    select: (data) => data.profiles[0],
    ...PROFILE_DEFAULT_OPTIONS,
    ...options,
  });

export const prefetchProfile = async (
  queryClient: QueryClient,
  options: ProfileOptions = {},
) => {
  await queryClient.prefetchQuery<Types.GetProfilesResponse, RequesterError>({
    queryKey: QUERY_KEYS.profile(),
    queryFn: () => API.getProfile(),
    ...PROFILE_DEFAULT_OPTIONS,
    ...options,
  });
};

export { QUERY_KEYS as PROFILES_QUERY_KEYS };
