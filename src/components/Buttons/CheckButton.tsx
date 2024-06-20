import classes from './stylebuttons.module.scss'
export default function CheckButton() {
    return(
        <>
        <button className={classes.buttonvideo}><span className={classes.TextButtonVideo}>Проверить</span></button>
        </>
    )
}