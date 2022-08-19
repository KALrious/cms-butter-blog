import Image from 'next/image';

export default function FooterSection({ mainMenu }) {
  const links = mainMenu.map((link) => ({
    ...link,
    url: link.url[0] === '#' ? `/${link.url}` : link.url,
  }));

  return (
    <footer className="footer pt-32">
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
              <p className="mb-6">On glisse ?</p>
              <ul className="social-links flex items-center">
                <li>
                  <a href="https://www.linkedin.com/in/jean-gautier/">
                    <i className="lni lni-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kalrious">
                    <i className="lni lni-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/KALrious">
                    <i className="lni lni-github"></i>
                  </a>
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
            </div>
          </div>
          <div className="flex-1">
            <div className="footer-widget">
              <h3>Subscribe Newsletter</h3>
              <form action="#">
                <input type="email" placeholder="Email" />
                <button className="main-btn btn-hover">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
