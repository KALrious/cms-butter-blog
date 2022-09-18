import BCLink, {
  BCLinkProps,
} from '@/components/DS/bread-crumb/components/BClink';
import Current, {
  CurrentProps,
} from '@/components/DS/bread-crumb/components/current';
import { FC, HTMLAttributes } from 'react';

type Compound = {
  Link: FC<BCLinkProps>;
  Current: FC<CurrentProps>;
};

const BreadCrumb: FC<HTMLAttributes<HTMLDivElement>> & Compound = ({
  children,
}) => (
  <ul className="flex justify-center mt-4 sm:flex-row list-none p-0 m-0">
    {children}
  </ul>
);

BreadCrumb.Link = BCLink;
BreadCrumb.Current = Current;

export default BreadCrumb;
