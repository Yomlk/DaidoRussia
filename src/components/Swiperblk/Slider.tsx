import Swiper from "./Swiper";

const Slider: React.FC = () => {
  const slides = [
    {
      image: "src/components/Swiperblk/img/Banner1.svg",
      text: "ru_key_1",
      pdfUrl: "src/components/Swiperblk/catalog_2023.pdf",
      buttonTextKey: "btnkey_1",
    },
    {
      image: "src/components/Swiperblk/img/Banner2.svg",
      text: "ru_key_2",
      pdfUrl: "src/components/Swiperblk/catalog_2023.pdf",
      buttonTextKey: "btnkey_2",
    },
    {
      image: "src/components/Swiperblk/img/Banner3.svg",
      text: "ru_key_3",
      pdfUrl: "src/components/Swiperblk/catalog_2023.pdf",
      buttonTextKey: "btnkey_3",
    },
  ];

  return (
    <div className="Slides">
      <Swiper slides={slides} />
    </div>
  );
};

export default Slider;
