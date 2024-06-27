import classes from "./stylebuttons.module.scss";
import { useTranslation } from "react-i18next";
interface CheckButtonProps {
  btnkey: string;
  onClick: () => void;
}
const CheckButton: React.FC<CheckButtonProps> = ({ btnkey, onClick }) => {
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

export default CheckButton;
