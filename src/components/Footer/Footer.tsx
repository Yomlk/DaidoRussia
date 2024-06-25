import "./Footer.scss";
import "./footermedia.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footBlk">
          <div className="firstfooter">
            <div className="FirstFooterText">
              <h3 className="BoldFooter">Генеральный директор</h3>
              <p className="regFooter">тел: 8(831-61)2-12-30</p>
              <p className="regFooter">факс:7-63-25</p>
              <p className="regFooter">E-mail:DMR@daidorussia.com</p>
            </div>
            <div className="FirstFooterText">
              <h3 className="BoldFooter">Руководитель департамента</h3>
              <p className="regFooter">тел: 8(831-61)3-77-89</p>
              <p className="regFooter">факс:2-12-33, 7-63-23</p>
            </div>
            <div className="FirstFooterText">
              <h3 className="BoldFooter">Руководитель департамента закупок:</h3>
              <p className="regFooter">тел: 8(831-61)2-12-32</p>
              <p className="regFooter">факс:2-12-33, 7-63-23</p>
            </div>
          </div>
          <div className="secondfooter">
            <div className="secondFooterText">
              <h3 className="BoldFooter">
                Руководитель департамента качества:
              </h3>
              <p className="regFooter">тел: 8(831-61)2-12-30 (доб.150)</p>
            </div>
            <div className="logotext">
              <div className="textFoot">
                <p className="textFootPrivacy">© 2009, ДАЙДО МЕТАЛЛ РУСЬ</p>
              </div>
              <div className="logo">
                <img src="./src/components/Footer/img/footer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default  Footer;