import Swiper from "./Swiper";

const Slider: React.FC = () => {
  const slides = [
    {
      image: "./public/img/Slider/Banner1.svg",
      text: "ru_key_1",
      pdfUrl: "./public/img/Slider/catalog_2023.pdf",
      buttonTextKey: "btnkey_1",
    },
    {
      image: "./public/img/Slider/Banner2.svg",
      text: "ru_key_2",
      pdfUrl: "./public/img/Slider/catalog_2023.pdf",
      buttonTextKey: "btnkey_2",
    },
    {
      image: "./public/img/Slider/Banner3.svg",
      text: "ru_key_3",
      pdfUrl: "./public/img/Slider/catalog_2023.pdf",
      buttonTextKey: "btnkey_3",
    },
  ];

  return (
    <section className="Slides">
      <Swiper slides={slides} />
    </section>
  );
};

export default Slider;
