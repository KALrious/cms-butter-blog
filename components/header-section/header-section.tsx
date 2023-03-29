import MainMenuLink from '@/components/header-section/main-menu-link';
import SpiderMan from '@/components/svg/spider-man';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  mainMenuLinks: {
    url: string;
    label: string;
  }[];
};
/**
 *
 *  Il faudra rajouter la nav en sémantique
 *  faire le container du header
 *  transformer function en const => return
 *  mettre les sections navigation
 */
export default function HeaderSection({ mainMenuLinks = [] }: Props) {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarAreaEl = useRef(null);

  const fixNavBar = () => {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fixNavBar);

    return () => {
      window.removeEventListener('scroll', fixNavBar);
    };
  }, []);

  return (
    <header
      className={`relative top-0 w-full bg-white z-50 ${
        isNavbarSticky ? 'sticky' : ''
      }`}>
      <div ref={navbarAreaEl} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <nav className="flex justify-start lg:w-0 flex-1">
            <a href="/">
              <span className="sr-only">Kalrious Blog</span>
              <Image
                src="/images/spider.png"
                alt="home"
                width={32}
                height={32}
              />
            </a>
            <ul id="nav" className="flex flex-1 justify-end gap-4 mr-2">
              {mainMenuLinks.map((navLink) => (
                <MainMenuLink
                  key={navLink.url}
                  url={navLink.url}
                  label={navLink.label}
                  // active={navLink.url === activeMenuLink}
                  // callbackOnClick={inactivateMenu}
                />
              ))}
              <MainMenuLink url="experiments" label="lab" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
