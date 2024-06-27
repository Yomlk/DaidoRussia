import { useState } from "react";
import axios from "axios";
import "./Form.scss";
import "./Formmedia.scss";
import FormButton from "../Buttons/FormButton";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
}

const Form: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "", // Clear the error message for the field being updated
    });
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    if (!formData.name) {
      errors.name = t("form.nameRequired");
    }
    if (!formData.email) {
      errors.email = t("form.emailRequired");
    }
    if (!formData.phone) {
      errors.phone = t("form.phoneRequired");
    }
    if (!formData.city) {
      errors.city = t("form.cityRequired");
    }
    if (!formData.message) {
      errors.message = t("form.messageRequired");
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post("/api/submit", formData);

      setResponseMessage(
        t("form.formSubmittedSuccess", { message: response.data.message }),
      );
    } catch (error: any) {
      console.error("Error during form submission:", error);
      setResponseMessage(
        t("form.formSubmitError", {
          errorMessage: error.response?.data?.message || error.message,
        }),
      );
    }
  };

  const getInputClassName = (fieldName: keyof FormData) => {
    return formErrors[fieldName] ? "form-input invalid" : "form-input";
  };

  return (
    <form className="Form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <div className="err">
          <label htmlFor="name" className="label-text">
            {t("form.name")}
          </label>
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <input
          className={`${getInputClassName("name")} ${
            formData.name && !formErrors.name ? "valid" : ""
          }`}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("form.name")}
        />
      </div>
      <div className="form-group">
        <div className="err">
          <label htmlFor="email" className="label-text">
            {t("form.email")}
          </label>
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <input
          className={`${getInputClassName("email")} ${
            formData.email && !formErrors.email ? "valid" : ""
          }`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("form.email")}
        />
      </div>
      <div className="form-group">
        <div className="err">
          <label htmlFor="phone" className="label-text">
            {t("form.phone")}
          </label>
          {formErrors.phone && <p className="error">{formErrors.phone}</p>}
        </div>
        <input
          className={`${getInputClassName("phone")} ${
            formData.phone && !formErrors.phone ? "valid" : ""
          }`}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t("form.phone")}
        />
      </div>
      <div className="form-group">
        <div className="err">
          <label htmlFor="city" className="label-text">
            {t("form.city")}
          </label>
          {formErrors.city && <p className="error">{formErrors.city}</p>}
        </div>
        <input
          className={`${getInputClassName("city")} ${
            formData.city && !formErrors.city ? "valid" : ""
          }`}
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder={t("form.city")}
        />
      </div>
      <div className="form-group">
        <div className="err">
          <label htmlFor="message" className="label-text">
            {t("form.message")}
          </label>
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>
        <textarea
          className={`${getInputClassName("message")} ${
            formData.message && !formErrors.message ? "valid" : ""
          }`}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("form.message")}
        />
      </div>
      <div className="form-btn">
        <div className="btnform">
          <FormButton btnkey="btnform" />
        </div>
      </div>
      {responseMessage && <p className="sucessform">{responseMessage}</p>}
    </form>
  );
};

export default Form;
