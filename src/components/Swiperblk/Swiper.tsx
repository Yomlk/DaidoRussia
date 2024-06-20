import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.scss'
import './SwiperMedia.scss'
import {  Pagination, A11y } from 'swiper/modules';
import ButtonFirst from '../Buttons/ButtonFirst';

interface Slide{
  image:string;
  text:string; 
}
interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[ Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container-fluid slide">
              <div className='row slideBlk'>
                <p className="TextBanner">{slide.text}</p>
                <div className='btn'><ButtonFirst /></div>
              </div>
              <div className="row image-container">
              <img src={slide.image} alt={`Slide ${index}`} />
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
