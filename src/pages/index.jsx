import Head from 'next/head';
import { getSession } from 'next-auth/react';

import Footer from '@/components/Footer/Footer';
import StreamDevices from '@/components/StreamDevices/StreamDevices';
import Hero from '@/components/Hero/Hero';
import HomeBackground from '@/components/HomeBackground/HomeBackground';

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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/catalog',
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default Home;
