import styled from 'styled-components';

const SubmitModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -20px;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`;
const SubmitModalContainer = styled.div`
  width: 100%;
  height: 25%;
  max-height: 320px;
  max-width: 535px;
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
const SubmitModaltext = styled.p``;
// const SubmitModalOverlay = styled.div``;
// const SubmitModalOverlay = styled.div``;
const SubmitModalButton = styled.button``;

const SubmitModal = (props) => {
  return (
    <SubmitModalOverlay style={props.style}>
      <SubmitModalContainer>
        <SubmitModalContent>
          <SubmitModalTitle>
            I Appreciate For Your Interest {props.senderName}!
          </SubmitModalTitle>
          <div>
            <SubmitModaltext>
              Your message has been sent to Eric Dollinger.
            </SubmitModaltext>
            <SubmitModaltext>
              Please wait and you will be returned to the home page shortly.
            </SubmitModaltext>
            <SubmitModaltext style={{ marginTop: '1.6rem' }}>
              Thank you.
            </SubmitModaltext>
            <SubmitModalButton onClick={props.onClick}>OK</SubmitModalButton>
          </div>
        </SubmitModalContent>
      </SubmitModalContainer>
    </SubmitModalOverlay>
  );
};

export default SubmitModal;
