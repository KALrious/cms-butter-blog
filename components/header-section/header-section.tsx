import MainMenuLink from '@/components/header-section/main-menu-link';

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
  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <nav className="flex justify-start lg:w-0 flex-1">
            <a href="#">
              <span className="sr-only">Kalrious Blog</span>
              <img
                className="h-8 w-auto sm:h-8"
                src="/images/spider.png"
                alt="home"
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
