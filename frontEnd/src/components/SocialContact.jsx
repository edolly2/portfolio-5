import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
  max-width: 80rem;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
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

function SocialContact() {
  return (
    <Container>
      <IconContainer>
        <IconTitle href='https://github.com/edolly2'>
          <div>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>GitHub</span>{' '}
            <span className='primary'>/&gt;</span>
          </div>
          <FaGithub className='contact-icon' />
        </IconTitle>
      </IconContainer>
      <IconContainer>
        <IconTitle href='https://www.linkedin.com/in/eric-dollinger/'>
          <div>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>Linkedin</span>{' '}
            <span className='primary'>/&gt;</span>
          </div>
          <FaLinkedinIn className='contact-icon' />
        </IconTitle>
      </IconContainer>
      <IconContainer>
        <IconTitle href='https://facebook.com/dev.dollinger/'>
          <div>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>Facebook</span>{' '}
            <span className='primary'>/&gt;</span>
          </div>
          <FaFacebook className='contact-icon' />
        </IconTitle>
      </IconContainer>
      <IconContainer>
        <IconTitle href='https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01'>
          <div>
            <span className='primary'>&lt;</span>{' '}
            <span className='secondary'>Twitter</span>{' '}
            <span className='primary'>/&gt;</span>
          </div>
          <FaTwitter className='contact-icon' />
        </IconTitle>
      </IconContainer>
    </Container>
  );
}

export default SocialContact;
