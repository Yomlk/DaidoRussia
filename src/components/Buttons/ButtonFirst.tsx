import classes from "./stylebuttons.module.scss";
interface ButtonFirstProps {
  onClick?: () => void;
}
const ButtonFirst: React.FC<ButtonFirstProps> = ({ onClick })  => {
  return (
    <>
      <button className={classes.buttonslide} onClick={onClick}>
        <span className={classes.TextButton}>В каталог</span>
      </button>
    </>
  );
}

export default ButtonFirst;