import { useRef, useState, useEffect } from "react";
import { useContactFormValidator } from "../../lib/hooks/useContactFormValidator";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const ContactForm = (props) => {
  const form = useRef();
  const firstInputRef = useRef();

  const [inputData, setInputData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
    referrer: "",
    honeypot: "", // Honeypot field for bot detection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { validateForm, onBlurField, errors } =
    useContactFormValidator(inputData);

  // Focus management for accessibility
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const resetForm = () => {
    setInputData({
      user_name: "",
      user_email: "",
      user_message: "",
      referrer: "",
      honeypot: "",
    });
  };

  // Sanitize input to prevent XSS
  const sanitizeInput = (value) => {
    if (typeof value !== "string") return value;
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+\s*=/gi, "")
      .trim();
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const { isValid } = validateForm({
      inputData,
      errors,
      forceTouchErrors: true,
    });

    if (!isValid) {
      // Announce validation errors to screen readers
      const errorMessage = Object.values(errors)
        .filter((err) => err.error)
        .map((err) => err.message)
        .join(", ");

      if (errorMessage) {
        console.log("Validation errors:", errorMessage);
      }
      return;
    }

    // Check honeypot
    if (inputData.honeypot) {
      console.log("Bot detected via honeypot");
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      resetForm();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Sanitize all inputs
      const sanitizedData = {
        user_name: sanitizeInput(inputData.user_name),
        user_email: sanitizeInput(inputData.user_email),
        user_message: sanitizeInput(inputData.user_message),
        referrer: sanitizeInput(inputData.referrer),
      };

      // Use environment variable or default to local development
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || "Message sent successfully!",
        });
        resetForm();
        if (props.onSubmitClick) props.onSubmitClick();
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <form
      ref={form}
      className="contact-form"
      onSubmit={sendEmail}
      noValidate
      aria-label="Contact form"
    >
      <h3 className="form-header" id="form-title">
        <span className="primary">{"//"}</span> I Would Love to Hear From You
      </h3>

      {/* Honeypot field - hidden from users but visible to bots */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="honeypot">Don't fill this out if you're human</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={inputData.honeypot}
          onChange={handleInputChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      {/* Status message for screen readers */}
      {submitStatus && (
        <div
          role="alert"
          aria-live="polite"
          className={submitStatus.success ? "success-message" : "error-message"}
          style={{
            padding: "var(--spacing-md)",
            marginBottom: "var(--spacing-md)",
            borderRadius: "4px",
            backgroundColor: submitStatus.success ? "#d4edda" : "#f8d7da",
            color: submitStatus.success ? "#155724" : "#721c24",
            border: `1px solid ${submitStatus.success ? "#c3e6cb" : "#f5c6cb"}`,
          }}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="form-group">
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            <span aria-hidden="true">NAME</span>
            <span className="sr-only">Your full name</span>
          </label>
          <div className="error-group">
            <input
              ref={firstInputRef}
              className={`form-input ${
                errors.user_name.error && errors.user_name.dirty
                  ? "input-error"
                  : ""
              }`}
              id="name"
              type="text"
              name="user_name"
              value={inputData.user_name}
              onChange={handleInputChange}
              placeholder="Full Name"
              aria-label="Your full name"
              aria-required="true"
              aria-invalid={errors.user_name.error && errors.user_name.dirty}
              aria-describedby={
                errors.user_name.error && errors.user_name.dirty
                  ? "name-error"
                  : undefined
              }
              onBlur={onBlurField}
              disabled={isSubmitting}
              maxLength="100"
              autoComplete="name"
              required
            />
            {errors.user_name.dirty && errors.user_name.error ? (
              <p className="error" id="name-error" role="alert">
                {errors.user_name.message}
              </p>
            ) : (
              <p className="transparent" aria-hidden="true">
                ERROR
              </p>
            )}
          </div>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="email">
            <span aria-hidden="true">EMAIL</span>
            <span className="sr-only">Your email address</span>
          </label>
          <div className="error-group">
            <input
              className={`form-input ${
                errors.user_email.error && errors.user_email.dirty
                  ? "input-error"
                  : ""
              }`}
              id="email"
              type="email"
              name="user_email"
              value={inputData.user_email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              aria-label="Your email address"
              aria-required="true"
              aria-invalid={errors.user_email.error && errors.user_email.dirty}
              aria-describedby={
                errors.user_email.error && errors.user_email.dirty
                  ? "email-error"
                  : undefined
              }
              onBlur={onBlurField}
              disabled={isSubmitting}
              maxLength="254"
              autoComplete="email"
              required
            />
            {errors.user_email.dirty && errors.user_email.error ? (
              <p className="error" id="email-error" role="alert">
                {errors.user_email.message}
              </p>
            ) : (
              <p className="transparent" aria-hidden="true">
                Error
              </p>
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
            <span aria-hidden="true">THIS IS IN REFERENCE TO</span>
            <span className="sr-only">Select the topic of your message</span>
          </label>
          <select
            className="form-select"
            name="referrer"
            id="referrer"
            value={inputData.referrer}
            onChange={handleInputChange}
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            aria-label="Select the topic of your message"
            disabled={isSubmitting}
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
          <span aria-hidden="true">YOUR THOUGHTS</span>
          <span className="sr-only">Your message</span>
        </label>
        <textarea
          className={`form-textarea ${
            errors.user_message.error && errors.user_message.dirty
              ? "input-error"
              : ""
          }`}
          id="message"
          rows={10}
          placeholder="Thank you for showing interest in my portfolio."
          name="user_message"
          value={inputData.user_message}
          onChange={handleInputChange}
          onBlur={onBlurField}
          aria-label="Your message"
          aria-required="true"
          aria-invalid={errors.user_message.error && errors.user_message.dirty}
          aria-describedby={
            errors.user_message.error && errors.user_message.dirty
              ? "message-error"
              : undefined
          }
          disabled={isSubmitting}
          maxLength="2000"
          required
        />
        {errors.user_message.dirty && errors.user_message.error ? (
          <p className="error" id="message-error" role="alert">
            {errors.user_message.message}
          </p>
        ) : (
          <p className="transparent" aria-hidden="true">
            ERROR
          </p>
        )}
      </div>

      <div className="btn-group">
        <button
          className="btn"
          type="submit"
          id="theButton"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          aria-label={
            isSubmitting ? "Sending message..." : "Submit contact form"
          }
        >
          {isSubmitting ? "SENDING..." : "SUBMIT"}
        </button>
        <NavLink to="/" aria-label="Cancel and return to home page">
          <Button text="CANCEL" />
        </NavLink>
      </div>
    </form>
  );
};

export default ContactForm;
