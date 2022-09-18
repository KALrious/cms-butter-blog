import Link from 'next/link';

import camelcaseKeys from 'camelcase-keys';

import { getPostsData, getCategories } from '@/lib/api';
import CategoriesWidget from '@/components/blog/categories-widget';
import SearchWidget from '@/components/blog/search-widget';
import HeroBlog from '@/components/DS/hero-blog';
import PostsList from '@/components/blog/posts-list';
import BreadCrumb from '@/components/DS/bread-crumb/bread-crumb';

export default function Category({ posts, categories, slug }) {
  return (
    <>
      <section id="blog-roll" className="blog-roll-nav">
        <HeroBlog title="Blog Posts by Category">
          <BreadCrumb>
            <BreadCrumb.Link href="/" title="Home" />
            <BreadCrumb.Link href="/blog" title="Blog" />
            <BreadCrumb.Current title={`Category: ${slug}`} />
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

export async function getStaticProps({ params: { slug } }) {
  try {
    const blogPosts = (await getPostsData({ category: slug })).posts;
    const categories = await getCategories();

    return {
      props: { posts: camelcaseKeys(blogPosts), categories, slug },
      revalidate: 1,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const categories = await getCategories();

      return {
        paths: categories.map((category) => `/blog/category/${category.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error(`Couldn't load categories.`, e);

      return {
        paths: [],
        fallback: false,
      };
    }
  }

  return {
    paths: [],
    fallback: false,
  };
}
