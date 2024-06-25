import classes from "./stylebuttons.module.scss";

const FormButton =()  => {
  return (
    <>
      <button className={classes.buttonform}>
        <span className={classes.TextButtonVideo}>Отправить</span>
      </button>
    </>
  );
}

export default FormButton;
