import Brands from '@/components/Brands/Brands';
import Carousel from '@/components/Carousel/Carousel';
import CatalogList from '@/components/CatalogList/CatalogList';
import useHandleSession from '@/hooks/useHandleSession/useHandleSession';
import categories from '@/lib/categories';
import { SESSION_STATUS_AUTHENTICATED } from '@/lib/constants';
import Head from 'next/head';

/**
 * Catalog page.
 * @typedef {Object} Props
 * @property {CatalogType} list
 * @param {Props} props
 * @returns {JSX.Element | null}
 */
const Catalog = ({ list }) => {
  const { status } = useHandleSession({ protectedRoute: true });

  return status === SESSION_STATUS_AUTHENTICATED ? (
    <>
      <Head>
        <title>Disney+ | Streaming movies & series</title>
      </Head>
      <Carousel />
      <Brands />
      <CatalogList list={list} />
    </>
  ) : null;
};

/**
 * Statically generates the catalog list.
 */
export async function getStaticProps() {
  const fetchedData = await Promise.allSettled(
    categories.map((category) => fetch(category.url))
  );
  const data = await Promise.all(
    fetchedData.map((fetched) => fetched.value.json())
  );

  const list = data.map((category, index) => ({
    ...category,
    title: categories[index].title,
    type: categories[index].type,
  }));

  return {
    props: {
      list,
    },
  };
}

export default Catalog;
