import AnimatedContent from '@components/AnimatedContent';

import { ConnectedContactFormCard } from '@components/app/contact/contact-form-card';
import { ConnectedInformationCard } from '@components/app/contact/contact-information-card';
import { ConnectedContactLinksCard } from '@components/app/contact/contact-links-card';

const Page: React.FC = () => {
  return (
    <main className="@container flex flex-1 flex-col items-center justify-center">
      <div className="grid max-w-6xl grid-cols-1 gap-4 p-6 @xl:grid-cols-2">
        <div className="flex flex-col gap-4">
          <AnimatedContent direction="vertical" reverse={true}>
            <ConnectedInformationCard />
          </AnimatedContent>
          <AnimatedContent direction="horizontal" reverse={true}>
            <ConnectedContactLinksCard />
          </AnimatedContent>
        </div>
        <AnimatedContent direction="vertical">
          <ConnectedContactFormCard />
        </AnimatedContent>
      </div>
    </main>
  );
};

export default Page;
