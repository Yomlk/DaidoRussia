
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.scss";
import "./SwiperMedia.scss";
import { Pagination, A11y } from "swiper/modules";
import ButtonFirst from "../Buttons/ButtonFirst";

interface Slide {
  image: string;
  text: string;
  pdfUrl: string;
}
interface SliderProps {
  slides: Slide[];
}
const handleButtonClick = (pdfUrl: string) => {
  window.open(pdfUrl, '_blank'); // откроет PDF файл в новой вкладке
};
const Slider: React.FC<SliderProps> = ({ slides }) => {
  
  return (
    <div className="slider-container">
      <div className="sliderslide">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <div className="slideBlk">
                  <div className="slideBlk1">
                    <p className="TextBanner">{slide.text}</p>
                    <div className="btn">
                      <ButtonFirst onClick={() => handleButtonClick(slide.pdfUrl)}/>
                    </div>
                  </div>
                  <div className="image-container">
                    <img src={slide.image} alt={`Slide ${index}`} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
