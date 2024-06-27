import { useTranslation } from "react-i18next";
import classes from "./stylebuttons.module.scss";

interface ButtonFirstProps {
  onClick?: () => void;
  btnkey: string;
}
const ButtonFirst: React.FC<ButtonFirstProps> = ({ onClick, btnkey }) => {
  const { t } = useTranslation();
  return (
    <>
      <button className={classes.buttonslide} onClick={onClick}>
        <span className={classes.TextButton}>{t(`buttons.${btnkey}`)}</span>
      </button>
    </>
  );
};

export default ButtonFirst;
