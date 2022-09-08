import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import slider1 from '@/images/slider-1.jpg';
import slider2 from '@/images/slider-2.jpg';
import slider3 from '@/images/slider-3.jpg';
import slider4 from '@/images/slider-4.jpg';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const carouselItems = [
  {
    src: slider1,
    alt: 'Toy Story',
  },
  {
    src: slider2,
    alt: 'Star Wars',
  },
  {
    src: slider3,
    alt: 'The Simpsons',
  },
  {
    src: slider4,
    alt: 'The Mandalorian',
  },
];

export default function Carousel() {
  return (
    <section className="slider">
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
        {carouselItems.map((item) => (
          <SwiperSlide key={item.alt} className="slider-slide">
            <Image
              className="slider-img"
              alt={item.alt}
              src={item.src}
              priority={true}
              objectFit="contain"
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
