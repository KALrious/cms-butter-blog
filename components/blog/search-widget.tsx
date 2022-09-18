import Search from '@/components/DS/search/search';

export default function SearchWidget() {
  return (
    <div>
      <div className="bg-white z-10 shadow-custom p-8 relative overflow-hidden mb-8 rounded-2xl">
        <h5 className="mb-8 font-semibold relative z-10">Search This Site</h5>
        <Search href="blog/search" />
      </div>
    </div>
  );
}
