import camelcaseKeys from 'camelcase-keys';

import PostsList from '@/components/blog/posts-list';

import { getCategories, searchPosts } from '@/lib/api';
import CategoriesWidget from '@/components/blog/categories-widget';
import SearchWidget from '@/components/blog/search-widget';
import HeroBlog from '@/components/DS/hero-blog';
import BreadCrumb from '@/components/DS/bread-crumb/bread-crumb';

export default function Search({ posts, categories, query }) {
  return (
    <>
      <section id="blog-roll" className="blog-roll-nav">
        <HeroBlog title="Search Results">
          <BreadCrumb>
            <BreadCrumb.Link href="/" title="Home" />
            <BreadCrumb.Link href="/blog" title="Blog" />
            <BreadCrumb.Current title={`Search: "${query}"`} />
          </BreadCrumb>
        </HeroBlog>
      </section>

      <section className="blog-posts mt-4">
        <div className="container m-auto">
          <div className="row justify-content-center">
            <PostsList posts={posts || []} />
            <aside className="col-12 col-lg-4">
              <SearchWidget />
              <CategoriesWidget categories={categories || []} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ query: { query } }) {
  const blogPosts = await searchPosts({ query });
  const categories = await getCategories();

  return {
    props: { posts: camelcaseKeys(blogPosts), categories, query },
  };
}
