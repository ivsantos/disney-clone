import Head from 'next/head';

import Footer from '../components/Footer/Footer';
import DevicesSection from '../components/DevicesSection/DevicesSection';
import HeroSection from '../components/HeroSection/HeroSection';
import HomeBackground from '../components/HomeBackground/HomeBackground';

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
        <HeroSection />
        <DevicesSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
