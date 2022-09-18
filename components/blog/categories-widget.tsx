import BoxWithTitle from '@/components/DS/box-with-title/box-with-title';
import CategorieLink from '@/components/DS/categorie-link/categorie-link';

type Props = {
  categories: {
    name: string;
    slug: string;
  }[];
};

export default function CategoriesWidget({ categories }: Props) {
  return (
    <BoxWithTitle title="Categories">
      <ul className="flex">
        {categories.map((category) => (
          <li key={category.slug}>
            <CategorieLink
              href={`/blog/category/${category.slug}`}
              name={category.name}
            />
          </li>
        ))}
      </ul>
    </BoxWithTitle>
  );
}
