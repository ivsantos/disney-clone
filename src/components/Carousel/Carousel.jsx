import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import slider1 from '@/images/slider-1.jpg';
import slider2 from '@/images/slider-2.jpg';
import slider3 from '@/images/slider-3.jpg';
import slider4 from '@/images/slider-4.jpg';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
  return (
    <section className="carousel">
      <Swiper
        lazy={{ checkInView: true }}
        slidesPerView={1.1}
        watchSlidesProgress
        spaceBetween={10}
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className="carousel-slide">
          <Image
            className="carousel-img"
            alt="Slider 1"
            src={slider1}
            priority={true}
            objectFit="contain"
            layout="responsive"
          />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <Image
            className="carousel-img"
            alt="Slider 2"
            src={slider2}
            priority={true}
            objectFit="contain"
            layout="responsive"
          />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <Image
            className="carousel-img"
            alt="Slider 3"
            src={slider3}
            priority={true}
            objectFit="contain"
            layout="responsive"
          />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <Image
            className="carousel-img"
            alt="Slider 4"
            src={slider4}
            priority={true}
            objectFit="contain"
            layout="responsive"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
