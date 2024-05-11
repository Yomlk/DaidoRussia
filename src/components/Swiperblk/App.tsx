

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './App.css'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Data from './DummyData.json'
export default function App() {
  

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {Data.map((result,index)=>(
          <SwiperSlide key={index}>
          <img src={result.img} />
        </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  )
}


