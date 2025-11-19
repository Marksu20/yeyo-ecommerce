import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Navigation, Grid, Pagination, FreeMode } from 'swiper/modules';

import hots from '../dummy_data/hots.js';
import BestSellerEntry from './BestSellerEntry';

export default function ModelCarousel() {
  const BestSellerEntryElements = hots.map((hot) => {
    return (
      <SwiperSlide>
        <BestSellerEntry 
          key={hot.id}
          {...hot} 
        />  
      </SwiperSlide>
    )
  });

  return (
    <>
      <section className="w-full bg-white pt-3 mb-5 lg:py-10 ">
        <div className="max-w-[100%] md:max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-5 lg:mb-4">
            <h2 className="text-center text-lg lg:text-2xl font-bold text-gray-900 leading-tight">
              WHAT'S HOT
            </h2>
          </div>

          {/* Category */}
          <div>
            <Swiper 
              slidesPerView={'auto'}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode]}
              className="categorySwiper mb-5"
              >
                <SwiperSlide className="!w-auto">
                  <div className="border p-1 px-2 whitespace-nowrap">
                    Shoes
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <div className="border p-1 px-2 whitespace-nowrap">
                    Slides
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <div className="border p-1 px-2 whitespace-nowrap">
                    Clothes
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <div className="border p-1 px-2 whitespace-nowrap">
                    Accessories
                  </div>
                </SwiperSlide>
                
            </Swiper>
          </div>

          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-navigation-size': '20px'
            }}
            lazy={true}
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            grid={{
              rows: 4,
              fill: 'row'
            }}
            pagination={{
              clickable: true,
            }}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   768: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   1024: {
            //     slidesPerView: 5,
            //     spaceBetween: 50,
            //   },
            // }}
            modules={[Navigation, Grid, Pagination]}
            className="mySwiper"
          >
            {BestSellerEntryElements}
          </Swiper>
        </div>
      </section>
    </>
  );
}