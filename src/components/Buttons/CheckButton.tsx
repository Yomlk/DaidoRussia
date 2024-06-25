import classes from "./stylebuttons.module.scss";

const CheckButton =() => {
  return (
    <>
      <button className={classes.buttonvideo}>
        <span className={classes.TextButtonVideo}>Проверить</span>
      </button>
    </>
  );
}

export default CheckButton;
