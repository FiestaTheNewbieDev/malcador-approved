import AnimatedContent from '@components/AnimatedContent';
import { Badge } from '@components/ui/badge';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ROUTES from '@routes/index';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const DELAY = 0.3;

const Page: React.FC = () => {
  const t = useTranslations('comingSoonPage');

  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-4">
      <AnimatedContent
        className="flex flex-col items-center gap-4"
        delay={DELAY}
      >
        <h1 className="text-foreground text-center text-4xl font-bold">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          {t('description')}
        </p>
        <div className="flex gap-2">
          <Badge asChild>
            <Link href={ROUTES.linkedInProfile()} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </Link>
          </Badge>
          <Badge asChild>
            <Link href={ROUTES.gitHubProfile()} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </Link>
          </Badge>
        </div>
      </AnimatedContent>
    </main>
  );
};

export default Page;
