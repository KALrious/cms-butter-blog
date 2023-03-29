import Button from '@/components/DS/button/button';
import FixedButton from '@/components/DS/fixed-button.tsx/fixed-button';
import ChevronUp from '@/components/svg/chevron-up';
import { useEffect, useState } from 'react';

export default function ScrollToButtonButton() {
  const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

  function toggleScrollTopButton() {
    setHasScrollToTopButton(
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    );
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollTopButton);

    return () => {
      window.removeEventListener('scroll', toggleScrollTopButton);
    };
  }, []);

  return (
    <>
      {hasScrollToTopButton && (
        <FixedButton component="a" href="#">
          <ChevronUp />
        </FixedButton>
      )}
    </>
  );
}
