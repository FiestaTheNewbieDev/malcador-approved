import AnimatedContent from '@components/AnimatedContent';
import { Badge } from '@components/ui/badge';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeglotClassName } from '@lib/utils';
import ROUTES from '@routes/index';
import Link from 'next/link';

const DELAY = 0.3;

const Page: React.FC = () => (
  <main className="flex h-full w-full flex-col items-center justify-center p-4">
    <AnimatedContent className="flex flex-col items-center gap-4" delay={DELAY}>
      <h1 className="text-foreground text-center text-4xl font-bold">
        Coming Soon
      </h1>
      <p className="text-muted-foreground text-center text-lg">
        I am working on something great. Please check back later.
      </p>
      <div className="flex gap-2">
        <Badge asChild className={getWeglotClassName('no-translate')}>
          <Link href={ROUTES.linkedInProfile()} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </Link>
        </Badge>
        <Badge asChild className={getWeglotClassName('no-translate')}>
          <Link href={ROUTES.gitHubProfile()} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </Link>
        </Badge>
      </div>
    </AnimatedContent>
  </main>
);

export default Page;
