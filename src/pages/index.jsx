import Head from 'next/head';

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
        <link rel="icon" href="/assets/favicon.ico" />
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

export default Home;
