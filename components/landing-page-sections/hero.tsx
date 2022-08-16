import { FC } from 'react';

type Props = {
  headline: string;
  subheadline: string;
  scrollAnchorId: string;
};

const Hero: FC<Props> = ({ headline, subheadline, scrollAnchorId }) => (
  <section id={scrollAnchorId}>
    <div className="mx-auto max-w-3xl px-3 mt-16">
      <div className="flex flex-col gap-4">
        <h1>{headline}</h1>
        <p>{subheadline}</p>
      </div>
    </div>
  </section>
);

export default Hero;
