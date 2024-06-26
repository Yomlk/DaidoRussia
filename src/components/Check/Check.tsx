import "./Check.scss";
import "./Checkmedia.scss";
import CheckButton from "../Buttons/CheckButton";
/*
const Check = () => {
  return (
    <>
      <section className="Check">
        <div className="Head">
          <h2 className="HeadText">Проверка подлинности</h2>
        </div>
        <div className="CheckText">
          <p className="CheckTextMain">
            <span className="CheckTextBold">Уважаемые Покупатели!</span>
            <br />В «Дайдо Металл Русь» изменена система проверки <br />
            подлинности продукции. В зависимости от содержания <br />
            информации на стикере, Вам необходимо выбрать один из <br />
            следующих вариантов:
          </p>
        </div>
        <div className="Sticker">
          <img
            className="StickerImg"
            src="./src/components/Check/img/Stiker.png"
            alt=""
          />
        </div>
        <div className="CheckCards">
          <div className="Card1">
            <div className="CardHead">
              <p className="CardHeadText">
                Если на стикере указаны <br />
                номер телефона <span className="CardNumber">
                  +79101052000
                </span>{" "}
                <br /> и сайт{" "}
                <span className="CardLink">www.daidorussia.ru</span>
              </p>
            </div>
            <div className="CardButton">
              <CheckButton />
            </div>
            <div className="CardAbout">
              <div className="CardAboutHead">
                <h3 className="CardAboutHeadText">ДРУГИЕ СПОСОБЫ ПРОВЕРКИ:</h3>
              </div>
              <div className="CardAboutAdd">
                <p className="CardAboutText">
                  1.Отправить SMS с кодом на номер{" "}
                  <span className="CardNumber">+79101052000</span>;<br />
                </p>
                <p className="CardAboutText">
                  2.Позвонить на номер call-центра +7(83161) 21231, время работы{" "}
                  <br />
                  call-центра:пн-пт с 8:15 до 17:00;
                  <br />
                </p>
                <p className="CardAboutText">
                  3.Оставить сообщение на сайте{" "}
                  <span className="CardLink">www.daidorussia.ru/contacts</span>
                </p>
              </div>
            </div>
          </div>
          <div className="Card1">
            <div className="CardHead">
              <p className="CardHeadText">
                Если на стикере указаны <br />
                номер телефона <span className="CardNumber">
                  2420
                </span> <br /> и сайт{" "}
                <span className="CardLink">www.original.su</span>
              </p>
            </div>
            <div className="CardButton">
              <CheckButton />
            </div>
            <div className="CardAbout">
              <div className="CardAboutHead">
                <h3 className="CardAboutHeadText">ДРУГИЕ СПОСОБЫ ПРОВЕРКИ:</h3>
              </div>
              <div className="CardAboutAdd">
                <p className="CardAboutText">
                  1.Отправить SMS с кодом на номер <br />{" "}
                  <span className="CardNumber">2420</span>;<br />
                </p>
                <p className="CardAboutText">
                  2.Позвонить на номер <br />
                  круглосуточного call-центра <br /> 8-800-555-00-95.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 

export default Check;
*/
const Check = () => {
  return(
     <>
     <section className="PrivacyBlock">
      <div className="CheckBlk">
        <div className="CheckHeader"><h2 className="CheckHeaderZag">Проверка подлинности</h2></div>
        <div className="CheckHeaderDist"><p className="CheckHeaderText"><span className="CheckHeaderSpan">Уважаемые Покупатели!</span><br />

        В «Дайдо Металл Русь» изменена система проверки<br /> подлинности продукции. В зависимости от содержания<br /> информации на стикере, вам необходимо выбрать один из<br /> следующих вариантов:</p></div>
        <div className="CheckCards">
        <div className="CheckCard">
           <div className="CheckCardFirst">
            <img className='CheckCardImg' src="./src/components/Check/img/logo.png" alt="" />
            <p className="CheckCardText">Если на стикере указаны номер телефона +79101052000 и сайт<br /> <span className="Links">www.daidorussia.ru</span></p>
            <div className="CheckCardButton"><CheckButton /></div>
           </div>
           <div className="CheckCardFirst">
           <img className='CheckCardImg' src="./src/components/Check/img/logo.png" alt="" />
           <p className="CheckCardText">Если на стикере указаны номер телефона 2420 и сайт<br /> <span className="Links">www.original.su</span></p>
           <div className="CheckCardButton"><CheckButton /></div>
           </div>
        </div>
        <div className="CheckCard">
           <div className="CheckCardSecond">
            <h3 className="CheckCardSecondHeader">Другие способы проверки</h3>
            <p className="CheckCardSecondText">Отправить SMS с кодом на номер +79101052000.
                  Позвонить на номер call-центра 
                    +7(83161) 21231, время работы call-центра: пн-пт с 8:15 до 17:00.<br />
                      Оставить сообщение на сайте <span className="Links">www.daidorussia.ru</span></p>

           </div>
           <div className="CheckCardSecond">
           <h3 className="CheckCardSecondHeader">Другие способы проверки</h3>
           <p className="CheckCardSecondText">Отправить SMS с кодом на номер  2420.
           Позвонить на номер круглосуточного call-центра 8-800-555-00-95, время работы call-центра: пн-пт с 8:15 до 17:00.</p>

           </div>
        </div>
        </div>
        
        <div className="Sticker"><img className="stikprivacy" src="./src/components/Check/img/Stiker.png" alt="" /></div>
      </div>
     </section>
     </>
  )
}
export default Check;