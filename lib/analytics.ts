import { Router } from 'next/router';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const GTM_TAG = process.env.NEXT_PUBLIC_GTM_ID;

const Analytics: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(GTM_TAG);
    Router.events.on('routeChangeComplete', ReactGA.pageview);

    // @ts-ignore
    window._axcb = window._axcb || [];
    // @ts-ignore
    window._axcb.push((axeptio) => {
      axeptio.on('cookies:complete', (choices: any) => {
        if (choices.google_analytics) {
          ReactGA.set({ anonymizeIp: false });
        } else {
          ReactGA.set({ anonymizeIp: true });
        }
      });
    });

    return () => {
      Router.events.off('routeChangeComplete', ReactGA.pageview);
    };
  }, []);

  return null;
};

export default Analytics;
