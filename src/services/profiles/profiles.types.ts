import { Profile } from 'optimus-package';

export type GetProfileResponse = GetProfilesResponse;

export type GetProfilesParams = {
  limit?: number;
};
export type GetProfilesResponse = {
  profiles: Profile[];
};
