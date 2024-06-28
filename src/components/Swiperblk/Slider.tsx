import Swiper from "./Swiper";

const Slider: React.FC = () => {
  const slides = [
    {
      image: "/images/Slider/Banner1.svg",
      text: "ru_key_1",
      pdfUrl: "/images/Slider/catalog_2023.pdf",
      buttonTextKey: "btnkey_1",
    },
    {
      image: "/images/Slider/Banner2.svg",
      text: "ru_key_2",
      pdfUrl: "/images/Slider/catalog_2023.pdf",
      buttonTextKey: "btnkey_2",
    },
    {
      image: "/images/Slider/Banner3.svg",
      text: "ru_key_3",
      pdfUrl: "/images/Slider/catalog_2023.pdf",
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
