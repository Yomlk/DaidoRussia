import classes from "./stylebuttons.module.scss";
import { useTranslation } from "react-i18next";
interface ButtonVideoProps {
  btnkey: string;
}
const VideoButton: React.FC<ButtonVideoProps> = ({ btnkey }) => {
  const { t } = useTranslation();
  return (
    <>
      <button className={classes.buttonvideo}>
        <span className={classes.TextButtonVideo}>
          {t(`buttons.${btnkey}`)}
        </span>
      </button>
    </>
  );
};
export default VideoButton;
