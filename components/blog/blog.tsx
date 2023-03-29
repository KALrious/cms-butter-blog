import Button from '@/components/DS/button/button';
import Link from 'next/link';

import PostPreviewCondensed from './post-preview-condensed/post-preview-condensed';

const Blog = ({ posts }) => {
  return (
    <section id="blog" className="pt-40">
      <div className="mx-auto max-w-3xl px-3">
        <div className="flex">
          <div className="flex flex-col items-center gap-6">
            <div className="flex">
              <h2 className="whitespace-nowrap overflow-hidden text-xl sm:text-4xl lg:text-6xl lg:leading-[1.2]">
                The Latest Blog Posts:
              </h2>
              {/* <span className="box-border inline-block w-0 h-8 ml-1 bg-black md:-mb-4 sm:h-11 lg:h-16 animate-cursor will-change-transform rounded-m after:content-[''] after:rounded-m after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-black after:animate-cursor after:will-change-transform"></span> */}
            </div>
            <div className="flex flex-row justify-center gap-4 flex-wrap">
              {posts.map((post) => (
                <PostPreviewCondensed
                  key={post.slug}
                  title={post.title}
                  coverImage={post.featuredImage}
                  coverImageAlt={post.featuredImageAlt}
                  slug={post.slug}
                  excerpt={post.summary}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href={`/blog`} legacyBehavior>
                <Button component="a" href={`/blog`}>
                  View All Blog Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
