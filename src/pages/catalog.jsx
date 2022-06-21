import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import slider1 from '@/images/slider-1.jpg';
import slider2 from '@/images/slider-2.jpg';
import slider3 from '@/images/slider-3.jpg';
import slider4 from '@/images/slider-4.jpg';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const catalog = () => {
  return (
    <>
      <Head>
        <title>Disney+ España | Películas y series</title>
      </Head>
      <main className="header-space">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <Image
              alt="Slider 1"
              src={slider1}
              priority={true}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="Slider 2"
              src={slider2}
              priority={true}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="Slider 3"
              src={slider3}
              priority={true}
              objectFit="contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="Slider 4"
              src={slider4}
              priority={true}
              objectFit="contain"
            />
          </SwiperSlide>
        </Swiper>
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
