import "./Footer.scss";
import "./footermedia.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="Footsection">
        <div className="footBlk">
          <div className="firstfooter">
            <div className="FirstFooterText">
              <h3 className="BoldFooter">{t("footer.h3")}</h3>
              <p className="regFooter">{t("footer.reg1")}</p>
              <p className="regFooter">{t("footer.reg2")}</p>
              <p className="regFooter">E-mail:DMR@daidorussia.com</p>
            </div>
            <div className="FirstFooterText">
              <h3 className="BoldFooter">{t("footer.first1")}</h3>
              <p className="regFooter">{t("footer.first2")}</p>
              <p className="regFooter">{t("footer.first3")}</p>
            </div>
            <div className="FirstFooterText">
              <h3 className="BoldFooter">{t("footer.sec1")}</h3>
              <p className="regFooter">{t("footer.sec2")}</p>
              <p className="regFooter">{t("footer.sec3")}</p>
            </div>
          </div>
          <div className="secondfooter">
            <div className="secondFooterText">
              <h3 className="BoldFooter">{t("footer.kat1")}</h3>
              <p className="regFooter">{t("footer.kat2")}</p>
            </div>
            <div className="logotext">
              <div className="textFoot">
                <p className="textFootPrivacy">{t("footer.kat3")}</p>
              </div>
              <div className="logo">
                <img src="./public/img/Footer/footer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
