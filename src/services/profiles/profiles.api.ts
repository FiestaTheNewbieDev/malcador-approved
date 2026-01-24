import requester from '@lib/requester';
import { cache } from 'react';
import { GetProfilesParams, GetProfilesResponse } from './profiles.types';

const BASE_URL = '/profiles';

export const getProfile = () => getProfiles({ limit: 1 });
export const getProfileCached = cache(async () => getProfile());

export const getProfiles = (params?: GetProfilesParams) =>
  requester().get<GetProfilesResponse>(BASE_URL, {
    params,
  });
export const getProfilesCached = cache(async (params?: GetProfilesParams) =>
  getProfiles(params),
);
