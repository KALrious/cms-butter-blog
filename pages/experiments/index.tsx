import LavaWave from '@/components/svg/lava-wave/lava-wave';
import LavaWave2 from '@/components/svg/lava-wave/lava-wave2';
import LavaWave3 from '@/components/svg/lava-wave/lava-wave3';
import { FC } from 'react';

const Experiments: FC = () => (
  <div>
    <h1>Experiments</h1>
    <div className='relative h-96'>
      <LavaWave className="w-full absolute" />
      <LavaWave2 className="w-full absolute" />
      <LavaWave3 className="w-full absolute" />
    </div>
  </div>
);

export default Experiments;
