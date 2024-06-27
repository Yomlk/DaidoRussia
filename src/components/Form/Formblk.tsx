import Form from "./Form";
import "./Form.scss";
import "./Formmedia.scss";
import { useTranslation } from "react-i18next";

const FormBlk = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="Formsection">
        <div className="FormFull">
          <div className="Formheader">
            <h2 className="FormText">{t("form.formheader")}</h2>
          </div>
          <div className="FormCenter">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default FormBlk;
