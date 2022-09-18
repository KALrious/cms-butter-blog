import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import camelcaseKeys from 'camelcase-keys';

import { getPost, getPostsData, getCategories } from '@/lib/api';

import HumanDate from '@/components/human-date';
import AuthorCard from '@/components/author-card';
import Loader from '@/components/DS/loader/loader';
import SearchWidget from '@/components/blog/search-widget';
import CategoriesWidget from '@/components/blog/categories-widget';
import HeroBlog from 'pages/blog/hero-blog';

export default function BlogPost({ post, categories }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://buttercms.com/static/v2/images/favicon.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={post.url} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:description" content={post.metaDescription} />
        <meta name="twitter:site" content="@ButterCMS" />
        <meta name="twitter:creator" content="@ButterCMS" />
        <meta name="twitter:title" content="ButterCMS Blog" />
        <meta name="twitter:description" content={post.metaDescription} />
      </Head>
      <section id="blog-header" className="single-post-nav">
        <HeroBlog title={post.title}>
          <ul className="flex justify-center mt-4 sm:flex-row list-none p-0 m-0">
            <li className="after:content-['>']  after:text-xs after:right-3 right-3 mr-4">
              <Link href="/">
                <a className="text-sky-400 font-medium inline-block relative pr-4 capitalize">
                  Home
                </a>
              </Link>
            </li>
            <li className="after:content-['>']  after:text-xs after:right-3 right-3 mr-4">
              <Link href="/blog">
                <a className="text-sky-400 font-medium inline-block relative pr-4 capitalize">
                  Blog
                </a>
              </Link>
            </li>
            <li>{post.title}</li>
          </ul>
        </HeroBlog>
      </section>

      <section className="blog-post mt-4">
        <div className="container m-auto">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-post">
                <div className="single-post-meta">
                  <h2 className="single-post-header">{post.title}</h2>
                  <ul className="single-post-meta-info">
                    <li>
                      <AuthorCard author={post.author} />
                    </li>
                    <li>
                      <a>
                        <i className="lni lni-calendar"></i>{' '}
                        <HumanDate dateString={post.published} />
                      </a>
                    </li>
                    {post.tags.map((tag) => (
                      <li key={tag.slug}>
                        <Link href={`/blog/tag/${tag.slug}`}>
                          <a>
                            <i className="lni lni-tag"></i> {tag.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {post.featuredImage && (
                  <div className="single-post-thumbnail">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <div
                  className="single-post-body prose px-8 py-14"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </div>
            </div>

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

export async function getStaticProps({ params }) {
  try {
    const post = await getPost(params.slug);
    const categories = await getCategories();
    return { props: { post: camelcaseKeys(post), categories } };
  } catch (e) {
    console.error(`Couldn't load post or categories data.`, e);

    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const posts = (await getPostsData({})).posts;

      return {
        paths: posts.map((post) => `/blog/${post.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error(`Couldn't load posts.`, e);
    }
  }

  return {
    paths: [],
    fallback: false,
  };
}
