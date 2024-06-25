import classes from "./stylebuttons.module.scss";
interface ProductButtonProps {
  onClick?: () => void;
}
const ProductButton : React.FC<ProductButtonProps> = ({ onClick }) => {
  return (
    <>
      <button className={classes.buttonvideo} onClick={onClick}>
        <span className={classes.TextButtonVideo}>Вся продукция</span>
      </button>
    </>
  );
}

export default ProductButton;