import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useContactFormValidator } from "../../lib/hooks/useContactFormValidator";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const ContactForm = (props) => {
  const form = useRef();

  const [inputData, setInputData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
    referrer: "",
  });

  const { validateForm, onBlurField, errors } =
    useContactFormValidator(inputData);

  const resetForm = () => {
    setInputData({
      user_name: "",
      user_email: "",
      user_message: "",
      referrer: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { isValid } = validateForm({
      inputData,
      errors,
      forceTouchErrors: true,
    });

    if (!isValid) return;

    // Use environment variables or replace with your EmailJS values
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const userId = process.env.REACT_APP_EMAILJS_USER_ID || "";

    if (!serviceId || !templateId) {
      // If EmailJS not configured, just simulate submit for dev
      if (props.onSubmitClick) props.onSubmitClick();
      alert("Form submitted (dev mode)");
      resetForm();
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
        if (props.onSubmitClick) props.onSubmitClick();
        alert("Message sent successfully");
        resetForm();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message");
      }
    );
  };

  const handleInputChange = (event) => {
    const field = event.target.name;

    const nextFormState = {
      ...inputData,
      [field]: event.target.value,
    };

    setInputData(nextFormState);
    if (errors[field] && errors[field].dirty)
      validateForm({ inputData: nextFormState, errors, field });
  };

  return (
    <form ref={form} className="contact-form" onSubmit={sendEmail} noValidate>
      <h3 className="form-header">
        <span className="primary">{"//"}</span> I Would Love to Hear From You
      </h3>

      <div className="form-group">
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            NAME
          </label>
          <div className="error-group">
            <input
              className="form-input"
              id="name"
              type="text"
              name="user_name"
              value={inputData.user_name}
              onChange={handleInputChange}
              placeholder="Full Name"
              aria-label="Name Field"
              onBlur={onBlurField}
              required
            />
            {errors.user_name.dirty && errors.user_name.error ? (
              <p className="error">{errors.user_name.message}</p>
            ) : (
              <p className="transparent">ERROR</p>
            )}
          </div>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            EMAIL
          </label>
          <div className="error-group">
            <input
              className="form-input"
              id="email"
              type="email"
              name="user_email"
              aria-label="Email Field"
              value={inputData.user_email}
              onChange={handleInputChange}
              placeholder="Example@email.com"
              onBlur={onBlurField}
              required
            />
            {errors.user_email.dirty && errors.user_email.error ? (
              <p className="error">{errors.user_email.message}</p>
            ) : (
              <p className="transparent">Error</p>
            )}
          </div>
        </div>
      </div>

      <div className="form-group" style={{ marginTop: "1.6rem" }}>
        <div
          className="form-control"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <label className="form-label" htmlFor="referrer">
            THIS IS IN REFERENCE TO
          </label>
          <select
            className="form-select"
            name="referrer"
            id="referrer"
            value={inputData.referrer}
            onChange={handleInputChange}
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <option className="form-option" value="" disabled>
              -Select Best Option-
            </option>
            <option className="form-option" value="question">
              Question
            </option>
            <option className="form-option" value="suggestion">
              Suggestions
            </option>
            <option className="form-option" value="collaboration">
              Collaboration
            </option>
            <option className="form-option" value="jobOp">
              Job Opportunity
            </option>
            <option className="form-option" value="other">
              Other
            </option>
          </select>
        </div>
      </div>

      <div className="textarea-wrapper">
        <label className="form-label" htmlFor="message">
          YOUR THOUGHTS
        </label>
        <textarea
          className="form-textarea"
          id="message"
          rows={10}
          placeholder="Thank you for showing interest in my portfolio."
          name="user_message"
          aria-label="Message Text Area"
          value={inputData.user_message}
          onChange={handleInputChange}
          onBlur={onBlurField}
          required
        />
        {errors.user_message.dirty && errors.user_message.error ? (
          <p className="error">{errors.user_message.message}</p>
        ) : (
          <p className="transparent">ERROR</p>
        )}
      </div>

      <div className="btn-group">
        <button className="btn" type="submit" id="theButton">
          SUBMIT
        </button>
        <NavLink to="/">
          <Button text="CANCEL" />
        </NavLink>
      </div>
    </form>
  );
};

export default ContactForm;
