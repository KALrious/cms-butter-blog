import Image from 'next/image';
import Link from 'next/link';

import HumanDate from '@/components/DS/human-date/human-date';
import AuthorCard from '@/components/DS/author-card/author-card';
import Button from '@/components/DS/button/button';

type Props = {
  title: string;
  coverImage: string;
  coverImageAlt: string;
  date: string;
  author: {
    first_name: string;
    last_name: string;
    profile_image: string;
  };
  tags: {
    name: string;
    slug: string;
  }[];
  excerpt: string;
  slug: string;
};

export default function PostsPreview({
  title,
  coverImage,
  coverImageAlt,
  date,
  author,
  tags,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="col-12 col-lg-6">
      <div className="blog-roll-card flex flex-col">
        <div className="blog-roll-card-meta">
          <h2 className="blog-roll-card-header">
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <ul className="blog-roll-card-meta-info">
            <li>
              <AuthorCard author={author} />
            </li>
            <li>
              <i className="lni lni-calendar"></i>{' '}
              <HumanDate dateString={date} />
            </li>
            {tags.map((tag) => (
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
        {coverImage && (
          <div className="single-post-thumbnail">
            <Image
              src={coverImage}
              alt={coverImageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex flex-col justify-between">
          <div
            className="blog-roll-card-body prose"
            dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          <div className="flex justify-center text-center mb-4">
            <Link href={`/blog/${slug}`}>
              <Button className="static" component="a">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
