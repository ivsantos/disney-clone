import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';

import slider1 from '@/images/slider-1.jpg';
import slider2 from '@/images/slider-2.jpg';
import slider3 from '@/images/slider-3.jpg';
import slider4 from '@/images/slider-4.jpg';

const catalog = () => {
  return (
    <>
      <Head>
        <title>Disney+ España | Películas y series</title>
      </Head>
      <main className="header-space">
        </div>
        <div className="w-60 snap-center">
          <Image
            alt="Slider 2"
            src={slider2}
            priority={true}
            objectFit="contain"
          />
        </div>
        <div className="w-60 snap-center">
          <Image
            alt="Slider 3"
            src={slider3}
            priority={true}
            objectFit="contain"
          />
        </div>
        <div className="w-60 snap-center">
          <Image
            alt="Slider 4"
            src={slider4}
            priority={true}
            objectFit="contain"
          />
      </main>
    </>
  );
};

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

export default catalog;
