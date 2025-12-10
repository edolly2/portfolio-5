import Button from "./Button";

const SubmitModal = (props) => {
  return (
    <div className={`submit-modal-overlay ${props.modalClassName || ""}`}>
      <div className="submit-modal-container">
        <div className="submit-modal-content">
          <h3 className="submit-modal-title">
            I Appreciate You For Your Interest {props.senderName}!
          </h3>
          <div>
            <p className="submit-modal-text">
              Your message has been sent to Eric Dollinger.
            </p>

            <h3 className="submit-modal-title sub-title">Thank you.</h3>
            <div className="btn-container">
              <Button text="Okay" onClick={props.onModalClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
