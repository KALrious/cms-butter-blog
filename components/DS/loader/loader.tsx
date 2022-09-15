import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-[999]">
      <div>
        <div className="absolute left-1/2 top-1/2 w-16 z-10 ml-8">
          <div className="absolute w-full pb-[100%] top-1/2 left-1/2 mt-[-50%] ml-[-50%] animate-spin-slow">
            <div className="absolute w-full h-full animate-spin-easespin">
              <div className="absolute top-0 left-0 bottom-0 overflow-hidden right-1/2">
                <div className="absolute h-full w-[200%] left-0 right-[-100%] border-sky-400 border-8 rounded-full animate-spinner-left border-r-slate-300 border-b-slate-300" />
              </div>
              <div className="absolute top-0 left-1/2 bottom-0 overflow-hidden right-0">
                <div className="absolute h-full w-[200%] left-[-100%] right-0 border-sky-400 border-8 rounded-full animate-spinner-right border-l-slate-300 border-b-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
