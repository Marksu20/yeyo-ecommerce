import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import { Navigation, FreeMode } from 'swiper/modules';

import models from '../dummy_data/models.js';
import ModelEntry from './ModelEntry';

export default function ModelCarousel() {
  const modelEntryElements = models.slice(0, 5).map((model) => {
    return (
      <SwiperSlide>
        <ModelEntry 
          key={model.id}
          {...model} 
        />  
      </SwiperSlide>
    )
  });

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '25px'
        }}
        lazy={true}
        slidesPerView={2}
        spaceBetween={5}
        navigation={true}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        {modelEntryElements}
      </Swiper>
    </>
  );
}