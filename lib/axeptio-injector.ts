import { useEffect } from 'react';

const AXEPTIO_ID = process.env.NEXT_PUBLIC_AXEPTIO_ID;
const COOKIE_VERSION = process.env.NEXT_PUBLIC_AXEPTIO_COOKIE_VERSION;

const AxeptioInjector = () => {
  useEffect(() => {
    const el = document.createElement('script');
    el.setAttribute('src', 'https://static.axept.io/sdk-slim.js');
    el.setAttribute('type', 'text/javascript');
    el.setAttribute('async', 'true');
    el.setAttribute('client-id', AXEPTIO_ID);
    el.setAttribute('cookies-version', COOKIE_VERSION);
    if (document.body !== null) {
      document.body.appendChild(el);
    }
  }, []);

  return null;
};

export default AxeptioInjector;
