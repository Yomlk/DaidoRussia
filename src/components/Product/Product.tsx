import ProductButton from "../Buttons/ProductButton";
import { useTranslation } from "react-i18next";
import "./Product.scss";
import "./ProductMedia.scss";

interface ImageData {
  imageUrl: string;
  textKey: string;
}

const ImageWithText: React.FC<ImageData> = ({ imageUrl, textKey }) => {
  const { t } = useTranslation();
  return (
    <div className="ProductList">
      <img className="image" src={imageUrl} alt="image" />
      <p className="ProductText">{t(`products.items.${textKey}`)}</p>
    </div>
  );
};

const Product: React.FC = () => {
  const { t } = useTranslation();
  const images: ImageData[] = [
    {
      imageUrl: "./src/components/Product/img/Vesta.png",
      textKey: "lada_vesta",
    },
    {
      imageUrl: "./src/components/Product/img/GAZNEXT.svg",
      textKey: "gaz_next",
    },
    {
      imageUrl: "./src/components/Product/img/PAZ.png",
      textKey: "paz",
    },
    {
      imageUrl: "./src/components/Product/img/Chevrolet.png",
      textKey: "chevrolet",
    },
  ];

  const handleButtonClick = () => {
    const pdfUrl = "src/components/Swiperblk/catalog_2023.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="productsection">
      <div className="Product">
        <div className="ProductMainBlk">
          <p className="ProductMainText">{t("products.title")}</p>
        </div>
        <div className="Row ProductContainer">
          {images.map((image, index) => (
            <ImageWithText
              key={index}
              imageUrl={image.imageUrl}
              textKey={image.textKey}
            />
          ))}
        </div>
        <div className="ProductButton">
          <ProductButton onClick={handleButtonClick} btnkey="productButton" />
        </div>
      </div>
    </section>
  );
};

export default Product;
