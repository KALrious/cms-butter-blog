import localFont from 'next/font/local';
export const sen = localFont({
  src: [
    {
      path: './Sen-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Sen-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Sen-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});
