import Swiper from "./Swiper";

const Slider: React.FC = () => {
  const slides = [
    {
      image: "src/components/Swiperblk/img/Banner1.svg",
      text: "Втулки верхней головки шатуна для двигателей КАМАЗ",
      pdfUrl:"src/components/Swiperblk/catalog_2023.pdf",
    },
    {
      image: "src/components/Swiperblk/img/Banner2.svg",
      text: "Втулки верхней головки шатуна для двигателей ММЗ",
      pdfUrl:"src/components/Swiperblk/catalog_2023.pdf",
    },
    {
      image: "src/components/Swiperblk/img/Banner3.svg",
      text: "Коренные и шатунные вкладыши для двигаталей КАМАЗ",
      pdfUrl:"src/components/Swiperblk/catalog_2023.pdf",
    },
  ];

  return (
    <div className="Slides">
      <Swiper slides={slides} />
    </div>
  );
};

export default Slider;
