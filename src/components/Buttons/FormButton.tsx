import classes from "./stylebuttons.module.scss";
import { useTranslation } from "react-i18next";
interface ButtonFormProps {
  onClick?: () => void;
  btnkey: string;
}
const FormButton: React.FC<ButtonFormProps> = ({ btnkey }) => {
  const { t } = useTranslation();
  return (
    <>
      <button className={classes.buttonform}>
        <span className={classes.TextButtonVideo}>
          {t(`buttons.${btnkey}`)}
        </span>
      </button>
    </>
  );
};

export default FormButton;
