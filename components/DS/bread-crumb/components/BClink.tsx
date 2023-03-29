import Link from 'next/link';
import { FC } from 'react';

export type BCLinkProps = {
  href: string;
  title: string;
};

const BCLink: FC<BCLinkProps> = ({ href, title }) => (
  <li className="after:content-['>']  after:text-xs after:right-3 right-3 mr-4">
    <Link
      href={href}
      className="text-sky-400 font-medium inline-block relative pr-4 capitalize">

      {title}

    </Link>
  </li>
);

export default BCLink;
