import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { IMG_URL } from '@/lib/constants';

export default function CatalogList({ list }) {
  if (!list) {
    return null;
  }

  console.log(list);
  return (
    <section className="slider mt-0 p-4">
      {list.map((category) => (
        <div key={category.title} className="mb-6 w-full">
          <h2 className="pb-2">{category.title}</h2>
          <Swiper
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: true,
            }}
            className="catalog"
            lazy={{ checkInView: true }}
            spaceBetween={10}
            slidesPerView={2.3}
            breakpoints={{
              480: {
                slidesPerView: 3.3,
              },
              640: {
                slidesPerView: 4.3,
              },
              768: {
                slidesPerView: 5.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6.3,
              },
              1440: {
                slidesPerView: 7.3,
                spaceBetween: 30,
              },
            }}
            navigation={{ disabledClass: '!hidden' }}
            scrollbar={{ draggable: true, snapOnRelease: true }}
            modules={[Navigation, EffectCoverflow]}
          >
            {category.results.map((item) => (
              <SwiperSlide key={item.id} className="poster">
                <Image
                  className="slider-img"
                  alt={item.title}
                  src={`${IMG_URL}${item.backdrop_path}`}
                  layout="fill"
                  objectFit="cover"
                  quality={60}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
}
