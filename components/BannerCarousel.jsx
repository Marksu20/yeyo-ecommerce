import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

import bannerData from '../dummy_data/bannerData.js';
import BannerCarouselEntry from './BannerCarouselEntry';

export default function BannerCarousel() {
  const BannerCarouselEntryElements = bannerData.map((banner) => {
      return (
        <SwiperSlide>
          <BannerCarouselEntry 
            key={banner.id}
            {...banner} 
          />  
        </SwiperSlide>
      )
    });
  
  return (
    <>
      <section className="relative w-full overflow-hidden mb-5 sm:mb-2">
        <Swiper
          style={{
            '--swiper-pagination-color': '#fff',
          }} 
          pagination={true}
          autoplay={{ delay: 10000, disableOnInteraction: false, }}
          autoHeight={true}
          modules={[Pagination, Autoplay]} 
          className="mySwiper"
        >
          {BannerCarouselEntryElements}
        </Swiper>

      </section>
    </>
  )
}