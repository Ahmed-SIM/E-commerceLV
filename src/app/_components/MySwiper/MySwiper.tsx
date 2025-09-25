'use client'


// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function MySwiper ({imageList,slidesPerview=1,spaceBetween=10}:{imageList:string[], slidesPerview?:number ,spaceBetween?:number}) {
  return (
    <Swiper  
    className='w-full'
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerview}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
   
   loop
   >
    
    {imageList.map(src=> <SwiperSlide key={src}>
<img src={src} className='w-full h-[400px]' />
    </SwiperSlide>

    )}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide >Slide 4</SwiperSlide>
      ... */}
    </Swiper>
  );
}