import SearchIcon from '@/components/DS/icons/search-icon';
import { FC } from 'react';

type Props = {
  href: string;
};

const Search: FC<Props> = ({ href }) => (
  <form action={href} method="get" className="relative">
    <input
      name="query"
      type="text"
      placeholder="Search Here..."
      className="bg-transparent w-full text-sm font-normal h-14 py-0 pr-[70px] pl-8 border border-sky-500 rounded-md"
    />
    <button
      type="submit"
      className="absolute flex items-center justify-center right-[6px] top-[6px] w-11 h-11 font-normal text-white p-0 bg-sky-500 border-none rounded-md">
      <SearchIcon />
    </button>
  </form>
);

export default Search;
