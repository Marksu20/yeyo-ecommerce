import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import models from '../dummy_data/models.js';
import ModelEntry from './ModelEntry';

export default function ModelCarousel() {
  const modelEntryElements = models.map((model) => {
    return (
      <SwiperSlide>
        <ModelEntry 
          key={model.id}
          {...model} 
        />  
      </SwiperSlide>
    )
  });

  // TODO: customize navigation buttons
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '25px'
        }}
        lazy={true}
        slidesPerView={3}
        spaceBetween={5}
        // pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {modelEntryElements}
      </Swiper>
    </>
  );
}