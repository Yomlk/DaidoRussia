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
      imageUrl: "./public/img/Product/Vesta.png",
      textKey: "lada_vesta",
    },
    {
      imageUrl: "./public/img/Product/GAZNEXT.svg",
      textKey: "gaz_next",
    },
    {
      imageUrl: "./public/img/Product/PAZ.png",
      textKey: "paz",
    },
    {
      imageUrl: "./public/img/Product/Chevrolet.png",
      textKey: "chevrolet",
    },
  ];

  const handleButtonClick = () => {
    const pdfUrl = "./public/img/Slider/catalog_2023.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="productsection">
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
    </div>
  );
};

export default Product;
