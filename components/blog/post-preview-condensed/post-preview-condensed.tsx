import Link from 'next/link';
import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import Button from '@/components/DS/button/button';

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
  <div className="flex-1 min-w-[296px]" {...rest}>
    <div className="relative z-10 px-6 py-8 shadow-2xl shadow-slate-200 rounded-xl">
      {coverImage && (
        <div className="relative h-52 w-full rounded-lg overflow-hidden">
          <Image
            src={coverImage}
            alt={coverImageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="pt-8 pb-6 flex flex-col gap-2">
        <h5 className="package-name">
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </h5>
        <p>{excerpt}</p>
      </div>
      <div className="blog-footer">
        <Link href={`/blog/${slug}`}>
          <Button component="a">Read More</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default PostPreviewCondensed;
