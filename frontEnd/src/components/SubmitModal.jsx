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
  backdrop-filter: blur(5px);
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  z-index: 4;
`;

const SubmitModalContainer = styled.div`
  max-width: 635px;
  width: 100%;
  max-height: 420px;
  height: auto;
  background-color: blue;
  padding: 1.6rem;
`;

const SubmitModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;
const SubmitModalTitle = styled.h3`
  text-align: center;
`;
const SubmitModalText = styled.p`
  text-align: center;
`;
// const SubmitModalOverlay = styled.div``;
// const SubmitModalOverlay = styled.div``;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2.4rem 0;
`;

const SubmitModal = (props) => {
  return (
    <SubmitModalOverlay className={props.modalClassName}>
      <SubmitModalContainer>
        <SubmitModalContent>
          <SubmitModalTitle>
            I Appreciate You For Your Interest {props.senderName}!
          </SubmitModalTitle>
          <div>
            <SubmitModalText>
              Your message has been sent to Eric Dollinger.
            </SubmitModalText>

            <SubmitModalTitle style={{ marginTop: '1.6rem' }}>
              Thank you.
            </SubmitModalTitle>
            <ButtonDiv>
              <Button text='Okay' onClick={props.onModalClick} />
            </ButtonDiv>
          </div>
        </SubmitModalContent>
      </SubmitModalContainer>
    </SubmitModalOverlay>
  );
};

export default SubmitModal;
