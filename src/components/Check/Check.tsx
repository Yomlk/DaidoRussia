import "./Check.scss"
import CheckButton from "../Buttons/CheckButton"

export default function Check() {
    return(
        <>
        <section className="Check">
            <div className="Head"><h2 className="HeadText">Проверка подлинности</h2></div>
            <div className="CheckText"><p className="CheckTextMain"><span className="CheckTextBold">Уважаемые Покупатели!</span><br />В «Дайдо Металл Русь» изменена система проверки <br />подлинности продукции. В зависимости от содержания <br />информации на стикере, Вам необходимо выбрать один из <br />следующих вариантов:</p></div>
            <div className="Sticker"><img className="StickerImg" src="./src/components/Check/img/Stiker.png" alt="" /></div>
            <div className="CheckCards">
                <div className="Card1">
                   <div className="CardHead"><p className="CardHeadText">Если на стикере указаны <br />номер телефона <span className="CardNumber">+79101052000</span> <br /> и сайт <span className="CardLink">www.daidorussia.ru</span></p></div>
                   <div className="CardButton"><CheckButton /></div>
                   <div className="CardAbout"> 
                     <div className="CardAboutHead"><h3 className="CardAboutHeadText">ДРУГИЕ СПОСОБЫ ПРОВЕРКИ:</h3></div>
                     <div className="CardAboutAdd">
                         <p className="CardAboutText">1.Отправить SMS с кодом на номер  <br /><span className="CardNumber">+79101052000</span>;<br /></p>
                         <p className="CardAboutText">2.Позвонить на номер call-центра<br />  +7(83161) 21231, время работы <br />call-центра:пн-пт с 8:15 до 17:00;<br /></p>
                         <p className="CardAboutText">3.Оставить сообщение на <br />сайте <span className="CardLink">www.daidorussia.ru/contacts</span></p>
                     
                     </div>
                   </div>
                </div>
                <div className="Card1">
                <div className="CardHead"><p className="CardHeadText">Если на стикере указаны <br />номер телефона <span className="CardNumber">2420</span> <br /> и сайт <span className="CardLink">www.original.su</span></p></div>
                   <div className="CardButton"><CheckButton /></div>
                   <div className="CardAbout"> 
                     <div className="CardAboutHead"><h3 className="CardAboutHeadText">ДРУГИЕ СПОСОБЫ ПРОВЕРКИ:</h3></div>
                     <div className="CardAboutAdd">
                     <p className="CardAboutText">1.Отправить SMS с кодом на номер <br /> <span className="CardNumber">2420</span>;<br /></p>
                     <p className="CardAboutText">2.Позвонить на номер <br />круглосуточного call-центра <br /> 8-800-555-00-95.<br /></p>
                         
                     </div>
                   </div>
                </div>
            </div>
        </section>
        </>
    )
}