import Link from 'next/link';

import PostPreviewCondensed from './post-preview-condensed/post-preview-condensed';

const Blog = ({ posts }) => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center">
              <h2>Les dernier Posts du Blog</h2>
              <div className="row justify-content-center">
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
              <p>
                <Link href={`/blog`}>
                  <a className="main-btn btn-hover mt-5">View All Blog Posts</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
