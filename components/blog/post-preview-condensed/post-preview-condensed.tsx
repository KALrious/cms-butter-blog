import Link from 'next/link';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';

type Props = {
  title: string;
  coverImage: string;
  coverImageAlt: string;
  excerpt: string;
  slug: string;
};

const PostPreviewCondensed: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  title,
  coverImage,
  coverImageAlt,
  excerpt,
  slug,
  ...rest
}) => (
  <div className="col-lg-4 col-md-8 col-sm-10" {...rest}>
    <div className="single-blog">
      {coverImage && (
        <div className="blog-header">
          <Image
            src={coverImage}
            alt={coverImageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="blog-body">
        <h5 className="package-name">
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </h5>
        <p>{excerpt}</p>
      </div>
      <div className="blog-footer">
        <Link href={`/blog/${slug}`}>
          <a className="main-btn btn-hover">Read More</a>
        </Link>
      </div>
    </div>
  </div>
);

export default PostPreviewCondensed;
