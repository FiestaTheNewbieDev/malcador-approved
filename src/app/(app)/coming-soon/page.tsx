import AnimatedContent from '@components/AnimatedContent';
import { ConnectedGitHubBadge } from '@components/badges/github-badge';
import { ConnectedLinkedInBadge } from '@components/badges/linkedin-badge';
import { getTranslations } from 'next-intl/server';

const DELAY = 0.3;

const Page: React.FC = async () => {
  const t = await getTranslations('comingSoonPage');

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
          <ConnectedLinkedInBadge />
          <ConnectedGitHubBadge />
        </div>
      </AnimatedContent>
    </main>
  );
};

export default Page;
