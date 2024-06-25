import classes from "./stylebuttons.module.scss";

const VideoButton = () => {
  return (
    <>
      <button className={classes.buttonvideo}>
        <span className={classes.TextButtonVideo}>Подробнее</span>
      </button>
    </>
  );
};
export default VideoButton;
