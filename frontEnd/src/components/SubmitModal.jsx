import styled from 'styled-components';
import Button from './Button';

const SubmitModalOverlay = styled.div`
  position: absolute;
  max-height: 100vh;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: -20px;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  z-index: 4;
`;

const SubmitModal = (props) => {
  return (
    <SubmitModalOverlay className={props.modalClassName}>
      <div className='submit-modal-container'>
        <div className='submit-modal-content'>
          <h3 className='submit-modal-title'>
            I Appreciate You For Your Interest {props.senderName}!
          </h3>
          <div>
            <p className='submit-modal-text'>
              Your message has been sent to Eric Dollinger.
            </p>

            <h3 className='submit-modal-title sub-title'>Thank you.</h3>
            <div className='btn-container'>
              <Button text='Okay' onClick={props.onModalClick} />
            </div>
          </div>
        </div>
      </div>
    </SubmitModalOverlay>
  );
};

export default SubmitModal;
