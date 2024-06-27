import classes from "./stylebuttons.module.scss";
import { useTranslation } from "react-i18next";
interface ProductButtonProps {
  onClick?: () => void;
  btnkey: string;
}
const ProductButton: React.FC<ProductButtonProps> = ({ onClick, btnkey }) => {
  const { t } = useTranslation();
  return (
    <>
      <button className={classes.buttonvideo} onClick={onClick}>
        <span className={classes.TextButtonVideo}>
          {t(`buttons.${btnkey}`)}
        </span>
      </button>
    </>
  );
};

export default ProductButton;
