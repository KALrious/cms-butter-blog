import Button from '@/components/DS/button/button';
import Link from 'next/link';

import PostPreviewCondensed from './post-preview-condensed/post-preview-condensed';

const Blog = ({ posts }) => {
  return (
    <section id="blog" className="pt-44">
      <div className="mx-auto max-w-3xl px-3">
        <div className="flex">
          <div className="flex flex-col items-center gap-6">
            <h2>The Latest Blog Posts: </h2>
            <div className="flex flex-row justify-center gap-4">
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
              <Link href={`/blog`}>
                <Button component="a">View All Blog Posts</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
