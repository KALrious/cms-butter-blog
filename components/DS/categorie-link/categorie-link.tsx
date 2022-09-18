import Link from 'next/link';
import { FC } from 'react';

// -webkit-box-pack: center;
// background: 0 0;
// border-radius: 5px;
// border: 1px solid #37c2cc;
// color: rgba(0, 0, 0, 0.7);
// display: inline-flex;
// font-size: 14px;
// font-weight: 400;
// justify-content: center;
// margin-bottom: 10px;
// margin-right: 5px;
// padding: 7px 15px;

type Props = {
  href: string;
  name: string;
};

const CategorieLink: FC<Props> = ({ href, name }) => {
  return (
    <Link href={href}>
      <a className="text-sm content-center py-2 px-4 mr-2 mb-3 rounded-md border border-sky-400">
        {name}
      </a>
    </Link>
  );
};

export default CategorieLink;
