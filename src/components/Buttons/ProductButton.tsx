import classes from './stylebuttons.module.scss'
export default function ProductButton() {
    return(
        <>
        <button className={classes.buttonvideo}><span className={classes.TextButtonVideo}>Вся продукция</span></button>
        </>
    )
}