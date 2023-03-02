import { FC } from 'react';

const UiLogin: FC = () => (
  <div className="w-full h-[100vh] bg-[#0f0d0e] text-[#f9f4da]">
    <div className="max-w-5xl mx-auto">
      <nav className="flex justify-between p-8 items-center">
        <a
          className="rounded-full bg-[#231f20] w-14 h-14 flex justify-center items-center hover:text-[#ffba28]"
          href="/experiments/ui-login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            viewBox="0 0 802.1 614.06">
            <title>custom svg</title>
            <path
              d="M661.36,193V593.65c0,138.7-110.7,213.38-281.21,213.38C208.38,807,99,732.35,99,593.65V193H275.82V586.54c0,45.05,39.44,75.87,104.33,75.87,66.17,0,105.61-30.82,105.61-75.87V193Z"
              transform="translate(-98.95 -192.97)"
              fill="currentColor"></path>
            <path
              d="M752.45,380.19c-.53-38.12,33.17-69.21,74.3-69.21,39,0,73.77,31.09,74.3,69.21-.53,39.12-35.29,70.21-74.3,70.21-41.13,0-74.83-31.09-74.3-70.21"
              transform="translate(-98.95 -192.97)"
              fill="currentColor"></path>
            <path
              d="M725.09,762.68c13.65-46.69,30.38-114.17,30.38-179.41L755,545.8l37.54,0H863.1l36.95,0v37.47c-6.27,81.57-38.22,158.15-58.29,202.45l-8.71,20.86L807.7,807H711.26Z"
              transform="translate(-98.95 -192.97)"
              fill="currentColor"></path>
          </svg>
        </a>
        <button className="bg-transparent px-8 py-2 text-lg rounded-3xl border-[#ffba28] text-[#ffba28] border-2 h-fit hover:text-[#0f0d0e] hover:bg-[#ffba28]">
          <span className="font-extrabold">Login</span>
        </button>
      </nav>
      <main className="px-8 mt-12">
        <section className="flex gap-6">
          <div className="flex-1">
            <h1 className="uppercase text-7xl font-extrabold mt-8">
              Welcome, Friend
            </h1>
            <h2 className="mt-6 text-4xl">Stuck in tutorial hell?</h2>
            <p className="mt-8 text-xl">
              You’ve come to the right place. We make learning the JavaScript
              ecosystem fun, approachable, and easy...
            </p>
            <button className="bg-[#ffba28] text-[#0f0d0e] px-8 py-2 text-lg border-2 h-fit border-[#ffba28] rounded-3xl mt-8">
              <span className="font-extrabold">Shut up and take my money</span>
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="p-10 bg-pink-600 w-96 h-[523px] absolute z-20 rounded-2xl border-black border-2 filter-custom -rotate-6">
              CARD 1
            </div>
            <div className="p-10 bg-indigo-600 w-96 h-[523px] absolute z-10 rounded-2xl border-black border-2 rotate-3 translate-x-24 scale-95">
              CARD 2
            </div>
            <div className="p-10 bg-emerald-600 w-96 h-[523px] absolute z-0 rounded-2xl border-black border-2 -rotate-6 translate-x-36 scale-90">
              CARD 3
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);

export default UiLogin;
