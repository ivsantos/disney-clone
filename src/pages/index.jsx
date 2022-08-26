import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import HomeBackground from '@/components/HomeBackground/HomeBackground';
import StreamDevices from '@/components/StreamDevices/StreamDevices';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

/**
 * Home page.
 * @returns {JSX.Element}
 */
const Home = () => {
  return (
    <>
      <Head>
        <title>
          Disney+ España | Historias que esperas + historias que no imaginas
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
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/catalog',
        permanent: true,
      },
    };
  }

  return { props: {} };
}

export default Home;
