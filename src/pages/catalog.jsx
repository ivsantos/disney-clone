import Brands from '@/components/Brands/Brands';
import Carousel from '@/components/Carousel/Carousel';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

/**
 * Catalog page.
 * @returns {JSX.Element}
 */
const Catalog = () => {
  return (
    <>
      <Head>
        <title>Disney+ España | Películas y series</title>
      </Head>
      <Carousel />
      <Brands />
    </>
  );
};

/**
 * Grabs the user's session server side and redirects to the login page if not logged in.
 * @param {any} context
 */
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Catalog;
