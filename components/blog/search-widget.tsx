import BoxWithTitle from '@/components/DS/box-with-title/box-with-title';
import Search from '@/components/DS/search/search';

export default function SearchWidget() {
  return (
    <BoxWithTitle title="Search This Site">
      <Search href="/blog/search" />
    </BoxWithTitle>
  );
}
