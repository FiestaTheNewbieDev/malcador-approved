import { OWNER_GITHUB_USERNAME, OWNER_LINKEDIN_SLUG } from '@constants/index';
import ADMIN_ROUTES from '@routes/admin';
import APP_ROUTES from '@routes/app';

const ROUTES = {
  app: APP_ROUTES,
  admin: ADMIN_ROUTES,

  linkedInProfile: (slug: string = OWNER_LINKEDIN_SLUG) =>
    `https://www.linkedin.com/in/${slug}`,
  gitHubProfile: (username: string = OWNER_GITHUB_USERNAME) =>
    `https://github.com/${username}`,
};

export default ROUTES;
