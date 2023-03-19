import LavaWave from '@/components/svg/lava-wave/lava-wave';
import LavaWave2 from '@/components/svg/lava-wave/lava-wave2';
import LavaWave3 from '@/components/svg/lava-wave/lava-wave3';
import Link from 'next/link';
import { FC } from 'react';

const Experiments: FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-900 text-zinc-100">
      <div className="p-4">
        <h1>Experiments:</h1>
        <p className="mb-6">
          Un endroit ou vous pouvez retrouver toutes mes expérimentations
          public:
        </p>
        <div className="flex justify-center">
          <Link href="/experiments/ui-login">UI Login</Link>
        </div>
      </div>
      <div className="relative h-96">
        <LavaWave className="w-full absolute" />
        <LavaWave2 className="w-full absolute" />
        <LavaWave3 className="w-full absolute" />
      </div>
      <div className="bg-[#fa7268] w-full h-full"></div>
    </div>
  );
};

export default Experiments;
