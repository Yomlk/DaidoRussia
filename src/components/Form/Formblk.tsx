import Form from "./Form";
import "./Form.scss";
import "./Formmedia.scss";

const FormBlk = () => {
  return (
    <>
      <section className="FormFull">
        <div className="Formheader">
          <h2 className="FormText">
            Если Вас заинтересовала информация или возникли вопросы, отправьте
            нам сообщение:
          </h2>
        </div>
        <div className="FormCenter">
          <Form />
        </div>
      </section>
    </>
  );
}

export default FormBlk;
