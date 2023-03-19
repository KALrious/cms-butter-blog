import PostsPreview from '@/components/blog/post-preview';

export default function PostsList({ posts }) {
  return (
    <div className="col-12 col-lg-8 blog-roll-cards mb-7">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {posts.map((post) => (
          <PostsPreview
            key={post.slug}
            title={post.title}
            coverImage={post.featuredImage}
            date={post.published}
            author={post.author}
            slug={post.slug}
            excerpt={post.summary}
            coverImageAlt={post.featuredImageAlt}
            tags={post.tags}
          />
        ))}
        {!posts.length && <div>No blog posts found.</div>}
      </div>
    </div>
  );
}
