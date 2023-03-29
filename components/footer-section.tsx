import Button from '@/components/DS/button/button';
import IconButton from '@/components/DS/icon-button/icon-button';
import Input from '@/components/DS/input/input';
import Github from '@/components/svg/github';
import Linkedin from '@/components/svg/linkedin';
import Twitter from '@/components/svg/twitter';
import Image from 'next/legacy/image';
import Link from 'next/link';

export default function FooterSection({ mainMenu }) {
  const links = mainMenu.map((link) => ({
    ...link,
    url: link.url[0] === '#' ? `/${link.url}` : link.url,
  }));

  return (
    <footer className="footer pt-32 px-2">
      <div className="container max-w-3xl w-full md:max-w-5xl lg:max-w-7xl m-auto">
        <div className="row flex flex-wrap flex-col lg:flex-row">
          <div className="flex-1">
            <div className="footer-widget">
              <div className="mb-8">
                <a href="/">
                  <Image
                    width={50}
                    height={50}
                    src="/images/spider.png"
                    alt="logo"
                  />
                </a>
              </div>
              <p className="mb-6">On glisse ?🏄🏻‍♂️</p>
              <ul className="flex items-center gap-5">
                <li>
                  <IconButton
                    component="a"
                    aria-label="linkedin lien"
                    href="https://www.linkedin.com/in/jean-gautier/">
                    <i>
                      <Linkedin />
                    </i>
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    component="a"
                    aria-label="twitter lien"
                    href="https://twitter.com/kalrious">
                    <i>
                      <Twitter />
                    </i>
                  </IconButton>
                </li>
                <li>
                  <IconButton
                    component="a"
                    aria-label="github lien"
                    href="https://github.com/KALrious">
                    <i>
                      <Github />
                    </i>
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="footer-widget">
              <h3>About Us</h3>
              <ul className="links">
                {links.map((navLink) => (
                  <li key={navLink.url}>
                    <a href={navLink.url}>{navLink.label}</a>
                  </li>
                ))}
              </ul>
              <h6>Dev with the power of</h6>
              <Link href="https://buttercms.com" aria-label="buttercms lien">
                <Image
                  className="h-8"
                  width={132}
                  height={32}
                  src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
                  alt="buttercms image"
                />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <h3 className="mt-3 mb-5">Subscribe Newsletter</h3>
              <form action="#" className="flex flex-col gap-3">
                <Input type="email" placeholder="Email" />
                <Button component="button">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
