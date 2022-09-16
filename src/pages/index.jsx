import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import HomeBackground from '@/components/HomeBackground/HomeBackground';
import StreamDevices from '@/components/StreamDevices/StreamDevices';
import { URL_AUTHENTICATED } from '@/lib/constants';
import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import { authOptions } from './api/auth/[...nextauth]';

/**
 * Home page.
 * @returns {JSX.Element}
 */
const Home = () => {
  return (
    <>
      <Head>
        <title>
          {"Disney+ | Stories you expect + stories you can't imagine"}
        </title>
      </Head>
      <main>
        <HomeBackground />
        <Hero />
        <StreamDevices />
        <Footer />
      </main>
    </>
  );
};

/**
 * Grabs the user's session server side and redirects to the catalog page if logged in.
 * @param {any} context
 */
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session) {
    return {
      redirect: {
        destination: URL_AUTHENTICATED,
        permanent: true,
      },
    };
  }

  return { props: {} };
}

export default Home;
