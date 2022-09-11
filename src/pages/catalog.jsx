import Brands from '@/components/Brands/Brands';
import Carousel from '@/components/Carousel/Carousel';
import CatalogList from '@/components/CatalogList/CatalogList';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';

/**
 * Catalog page.
 * @typedef {Object} Props
 * @property {CatalogType} list
 * @param {Props} props
 * @returns {JSX.Element | null}
 */
const Catalog = ({ list }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  return status === 'authenticated' ? (
    <>
      <Head>
        <title>Disney+ España | Películas y series</title>
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
  const categories = [
    {
      title: 'Películas más valoradas',
      type: 'movie',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Películas populares',
      type: 'movie',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Series más valoradas',
      type: 'tv',
      url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Series populares',
      type: 'tv',
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
  ];

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
