import "./Check.scss";
import "./Checkmedia.scss";
import CheckButton from "../Buttons/CheckButton";
import { useTranslation } from "react-i18next";

const Check = () => {
  const { t } = useTranslation();
  const handleButtonClick = () => {
    window.open("https://bc.daidorussia.com", "_blank");
  };
  return (
    <>
      <div className="PrivacyBlock">
        <div className="CheckBlk">
          <div className="CheckHeader">
            <h2 className="CheckHeaderZag">{t("check.header")}</h2>
          </div>
          <div className="CheckHeaderDist">
            <p className="CheckHeaderText">
              <span className="CheckHeaderSpan">
                {t("check.dearCustomers")}
              </span>
              <br />

              {t("check.systemChange")}
            </p>
          </div>
          <div className="CheckCards">
            <div className="CheckCard">
              <div className="CheckCardFirst">
                <img
                  className="CheckCardImg"
                  src="./public/img/Check/logo.png"
                  alt=""
                />
                <p className="CheckCardText">
                  {t("check.option1.text")}
                  <br />{" "}
                  <a
                    href="https://www.daidorussia.ru"
                    target="_blank"
                    className="Links"
                  >
                    www.daidorussia.ru
                  </a>
                </p>
                <div className="CheckCardButton">
                  <CheckButton btnkey="checkbtn" onClick={handleButtonClick} />
                </div>
              </div>
              <div className="CheckCardFirst">
                <img
                  className="CheckCardImg"
                  src="./public/img/Check/logo.png"
                  alt=""
                />
                <p className="CheckCardText">
                  {t("check.option2.text")}
                  <br />{" "}
                  <a
                    href="https://www.original.su"
                    target="_blank"
                    className="Links"
                  >
                    www.original.su
                  </a>
                </p>
                <div className="CheckCardButton">
                  <CheckButton btnkey="checkbtn" onClick={handleButtonClick} />
                </div>
              </div>
            </div>
            <div className="CheckCard">
              <div className="CheckCardSecond">
                <h3 className="CheckCardSecondHeader">
                  {t("check.otherWays")}
                </h3>
                <p className="CheckCardSecondText">
                  {t("check.otherWays1")} <br />
                  {t("check.otherWays2")}
                  {t("check.otherWays3")}{" "}
                  <a
                    href="https://www.daidorussia.ru"
                    target="_blank"
                    className="Links"
                  >
                    www.daidorussia.ru
                  </a>
                </p>
              </div>
              <div className="CheckCardSecond">
                <h3 className="CheckCardSecondHeader">
                  {t("check.otherWays")}
                </h3>
                <p className="CheckCardSecondText">
                  {t("check.otherWays4")}
                  <br />
                  {t("check.otherWays5")}
                </p>
              </div>
            </div>
          </div>

          <div className="Sticker">
            <img
              className="stikprivacy"
              src="././public/img/Check/Stiker.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Check;
