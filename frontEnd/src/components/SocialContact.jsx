import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);

  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  max-width: 90vw;
  width: 100%;

  @media screen and (min-width: 900px) {
    max-width: 80rem;
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(1.1);
  }
`;

const IconTitle = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialTitle = styled.div`
  white-space: nowrap;
`;

function SocialContact() {
  return (
    <Container>
      <IconContainer>
        <IconTitle href='https://github.com/edolly2'>
          <SocialTitle>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>GitHub</span>{' '}
            <span className='primary'>/&gt;</span>
          </SocialTitle>
          <FaGithub className='contact-icon' />
        </IconTitle>
      </IconContainer>
      <IconContainer>
        <IconTitle href='https://www.linkedin.com/in/eric-dollinger/'>
          <SocialTitle>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>Linkedin</span>{' '}
            <span className='primary'>/&gt;</span>
          </SocialTitle>
          <FaLinkedinIn className='contact-icon' />
        </IconTitle>
      </IconContainer>
      <IconContainer>
        <IconTitle href='https://facebook.com/dev.dollinger/'>
          <SocialTitle>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>Facebook</span>{' '}
            <span className='primary'>/&gt;</span>
          </SocialTitle>
          <FaFacebook className='contact-icon' />
        </IconTitle>
      </IconContainer>
      <IconContainer>
        <IconTitle href='https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01'>
          <SocialTitle>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>Twitter</span>{' '}
            <span className='primary'>/&gt;</span>
          </SocialTitle>
          <FaTwitter className='contact-icon' />
        </IconTitle>
      </IconContainer>
    </Container>
  );
}

export default SocialContact;
