import ProductButton from "../Buttons/ProductButton";
import "./Product.scss";
import "./ProductMedia.scss";

interface ImageData {
  imageUrl: string;
  text: string;
}
const ImageWithText: React.FC<ImageData> = ({ imageUrl, text }) => (
  <div className="ProductList">
    <img className="image" src={imageUrl} alt="image" />
    <p className="ProductText">{text}</p>
  </div>
);
const Product: React.FC = () => {
  const images: ImageData[] = [
    {
      imageUrl: "./src/components/Product/img/Vesta.png",
      text: "Lada Vesta",
    },
    {
      imageUrl: "./src/components/Product/img/GAZ.png",
      text: "ГАЗель Next",
    },
    {
      imageUrl: "./src/components/Product/img/PAZ.png",
      text: "ПАЗ",
    },
    {
      imageUrl: "./src/components/Product/img/Chevrolet.png",
      text: "Chevrolet",
    },
  ];
  const handleButtonClick = () => {
    
    const pdfUrl = "src/components/Swiperblk/catalog_2023.pdf";
    window.open(pdfUrl, '_blank'); 
  };
  return (
    <section className="Product">
      <div className="ProductMainBlk">
        <p className="ProductMainText">Наша продукция</p>
      </div>
      <div className="Row ProductContainer">
        {images.map((image, index) => (
          <ImageWithText
            key={index}
            imageUrl={image.imageUrl}
            text={image.text}
          />
        ))}
      </div>
      <div className="ProductButton">
        <ProductButton onClick={handleButtonClick}/>
      </div>
    </section>
  );
};

export default Product;
