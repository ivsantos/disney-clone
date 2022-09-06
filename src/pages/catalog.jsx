import Brands from '@/components/Brands/Brands';
import Carousel from '@/components/Carousel/Carousel';
import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';

/**
 * Catalog page.
 * @returns {JSX.Element}
 */
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
    </>
  );
};

/**
 * Grabs the user's session server side and redirects to the login page if not logged in.
 * @param {any} context
 */
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);

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
