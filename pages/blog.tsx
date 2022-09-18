import Link from 'next/link';

import camelcaseKeys from 'camelcase-keys';

import PostsList from '@/components/blog/posts-list';
import HeroBlog from '@/components/DS/hero-blog';

import { getPostsData, getCategories } from '@/lib/api';
import CategoriesWidget from '@/components/blog/categories-widget';
import SearchWidget from '@/components/blog/search-widget';
import BreadCrumb from '@/components/DS/bread-crumb/bread-crumb';

export default function Blog({ posts, categories }) {
  return (
    <>
      <section id="blog-roll" className="blog-roll-nav">
        <HeroBlog title="All Blog Posts">
          <BreadCrumb>
            <BreadCrumb.Link href="/" title="Home" />
            <BreadCrumb.Current title={`All blog posts`} />
          </BreadCrumb>
        </HeroBlog>
      </section>

      <section className="blog-posts mt-4">
        <div className="container m-auto">
          <div className="row justify-content-center">
            <PostsList posts={posts} />
            <aside className="col-12 col-lg-4">
              <SearchWidget />
              <CategoriesWidget categories={categories} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const blogPosts = (await getPostsData({})).posts;
      const categories = await getCategories();

      return { props: { posts: camelcaseKeys(blogPosts), categories } };
    } catch (e) {
      console.log('Could not get posts', e);

      return {
        props: { posts: [], categories: [] },
      };
    }
  }

  return { props: { posts: [], categories: [] } };
}
