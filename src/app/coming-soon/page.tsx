'use server';

import AnimatedContent from '@components/AnimatedContent';
import LightRays from '@components/LightRays';
import TextType from '@components/TextType';
import { cn, getWeglotClassName } from '@lib/utils';
import { Fragment } from 'react/jsx-runtime';

const DELAY = 0.3;

const Page: React.FC = () => (
  <Fragment>
    <LightRays
      className="absolute"
      followMouse={false}
      raysOrigin="top-center"
    />
    <main className="flex h-full w-full flex-col items-center justify-center">
      <AnimatedContent
        className="flex flex-col items-center gap-2"
        delay={DELAY}
      >
        <h1
          className={cn(
            'text-foreground text-4xl font-bold',
            getWeglotClassName('translate'),
          )}
        >
          Coming Soon
        </h1>
        <TextType
          as="p"
          text="I am working on something great. Please check back later."
          className={cn(
            'text-muted-foreground text-lg',
            getWeglotClassName('no-translate'),
          )}
          loop={false}
        />
      </AnimatedContent>
    </main>
  </Fragment>
);

export default Page;
