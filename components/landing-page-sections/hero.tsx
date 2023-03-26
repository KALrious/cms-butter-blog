import WhiteWave from '@/components/svg/white-wave';
import { FC } from 'react';

type Props = {
  headline: string;
  subheadline: string;
  scrollAnchorId: string;
};

const Hero: FC<Props> = ({ headline, subheadline, scrollAnchorId }) => (
  <section id={scrollAnchorId} className="relative">
    <div className="mx-auto max-w-3xl px-3 pt-16 pb-20 before:absolute before:content-[''] before:w-full before:bg-gradient-to-b before:from-violet-300 before:to-sky-200 before:h-full before:top-0 before:left-0 before:-z-10">
      <WhiteWave className="fill-white	left-0 w-full bottom-0 absolute" />
      <div className="flex flex-col gap-4 overflow-y-hidden">
        <h1 className="animate-titlefadein">{headline}</h1>
        <p className="animate-titlefadein">{subheadline}</p>
      </div>
    </div>
  </section>
);

export default Hero;
