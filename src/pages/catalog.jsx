import Brands from '@/components/Brands/Brands';
import Carousel from '@/components/Carousel/Carousel';
import Listing from '@/components/Listing/Listing';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';

/**
 * Catalog page.
 * @typedef {Object} Props
 * @property {any} list
 * @param {Props} props
 * @returns {JSX.Element}
 */
const Catalog = ({ list }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }

  return (
    <>
      <Head>
        <title>Disney+ España | Películas y series</title>
      </Head>
      <Carousel />
      <Brands />
      <Listing list={list} />
    </>
  );
};

export async function getStaticProps() {
  const categories = [
    {
      title: 'Películas más valoradas',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Películas populares',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Series más valoradas',
      url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMBD_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Series populares',
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
  }));

  return {
    props: {
      list,
    },
  };
}

export default Catalog;
