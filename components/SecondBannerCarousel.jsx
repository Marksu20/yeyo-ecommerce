import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

import bannerData from '../dummy_data/bannerData.js';
import SecondBannerCarouselEntry from './BannerCarouselEntry';

export default function SecondBannerCarousel() {
  const SecondBannerCarouselEntryElements = bannerData.slice(0, 4).map((banner) => {
      return (
        <SwiperSlide>
          <SecondBannerCarouselEntry
            key={banner.id}
            {...banner} 
          />  
        </SwiperSlide>
      )
    });
  
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <Swiper
          style={{
            '--swiper-pagination-color': '#fff',
          }} 
          pagination={true}
          autoHeight={true}
          rewind={false}
          autoplay={{ delay: 10000, disableOnInteraction: true, }}
          modules={[Pagination, Autoplay]} 
          className="mySwiper"
        >
          {SecondBannerCarouselEntryElements}
        </Swiper>

      </section>
    </>
  )
}