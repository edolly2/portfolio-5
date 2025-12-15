import Button from "./Button";

const SubmitModal = (props) => {
  const isLoading = props.success === null;
  const isSuccess = props.success === true;
  const isError = props.success === false;

  return (
    <div className={`submit-modal-overlay ${props.modalClassName || ""}`}>
      <div className="submit-modal-container">
        <div className="submit-modal-content">
          <h3 className="submit-modal-title">
            {isLoading
              ? "Sending..."
              : isSuccess
              ? `I Appreciate You For Your Interest ${props.senderName || ""}!`
              : "Oops! Something Went Wrong"}
          </h3>
          <div>
            <p className="submit-modal-text">
              {props.message ||
                (isLoading
                  ? "Sending your message..."
                  : isSuccess
                  ? "Your message has been sent to Eric Dollinger."
                  : "Message not sent. Please try again later.")}
            </p>

            <h3 className="submit-modal-title sub-title">
              {isSuccess ? "Thank you." : ""}
            </h3>
            <div className="btn-container">
              {!isLoading && (
                <Button text="Okay" onClick={props.onModalClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
