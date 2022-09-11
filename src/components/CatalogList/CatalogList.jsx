import { IMG_URL } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Renders a horizontal scrollable list of catalog items.
 * @typedef {Object} Props
 * @property {any} list
 * @param {Props} props
 * @returns {JSX.Element | null}
 */
export default function CatalogList({ list }) {
  if (!list) {
    return null;
  }

  return (
    <section className="slider mt-0">
      {list.map((category) => (
        <div key={category.title} className="mb-6 w-full">
          <h2 className="pl-8 font-bold tracking-wide text-secondary">
            {category.title}
          </h2>
          <div className="catalog">
            {category.results.map((item) => (
              <div key={item.id}>
                <Link href={`/${category.type}/${encodeURIComponent(item.id)}`}>
                  <a className="poster">
                    <Image
                      className="catalog-img"
                      alt={item.title}
                      src={`${IMG_URL}${
                        item.backdrop_path || item.poster_path
                      }`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
