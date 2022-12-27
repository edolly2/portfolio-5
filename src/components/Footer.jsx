import styled from 'styled-components';
import SiteBrand from './SiteBrand';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
  padding: 2.4rem;
  z-index: 4;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  margin-top: 6.4rem;
  font-size: 1.2rem;
`;

const FooterTitle = styled.h4`
  font-size: calc(26px + (36 - 26) * ((100vw - 360px) / (1920 - 360)));
`;

const ListsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  white-space: nowrap;
  width: 100%;
  justify-content: space-evenly;
`;

const Underline = styled.div`
  background-color: rgba(119, 119, 119, 0.6);
  width: 100%;
  height: 2px;
  margin: 0 auto;
  margin-bottom: 1.6rem;
`;

const FooterListItem = styled.li`
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #5c98d9;
  }
`;

const FooterSocialGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const CopyContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0.8rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3.6rem' }}>
        <SiteBrand />
        <FooterTitle>
          <span className='primary'>&lt;</span> THANKS FOR VISITING{' '}
          <span className='primary'>/&gt;</span>
        </FooterTitle>
      </div>
      <Underline />
      <ListsContainer>
        <div>
          <h5>
            <span className='primary'>//</span> SITE MAP
          </h5>
          <Underline />
          <ul>
            <FooterListItem>
              <NavLink className='footer-link' to='/'>
                HOME
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink className='footer-link' to='/about'>
                ABOUT
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink className='footer-link' to='/skills'>
                SKILLS
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink className='footer-link' to='/projects'>
                PROJECTS
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink className='footer-link' to='/contact'>
                CONTACT
              </NavLink>
            </FooterListItem>
            <FooterListItem>
              <NavLink className='footer-link' to='/blog'>
                BLOG
              </NavLink>
            </FooterListItem>
          </ul>
        </div>
        <div>
          <h5>
            <span className='primary'>//</span> FOLLOW ME
          </h5>
          <Underline />
          <ul>
            <FooterSocialGroup>
              <FooterListItem>
                <a href='https://github.com/edolly2'>
                  <FaGithub className='icon' />
                </a>
              </FooterListItem>
              <FooterListItem>
                <a href='https://www.linkedin.com/in/eric-dollinger/'>
                  <FaLinkedinIn className='icon' />
                </a>
              </FooterListItem>
            </FooterSocialGroup>
            <FooterSocialGroup>
              <FooterListItem>
                <a href='https://facebook.com/dev.dollinger/'>
                  <FaFacebook className='icon' />
                </a>
              </FooterListItem>
              <FooterListItem>
                <a href='https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01'>
                  <FaTwitter className='icon' />
                </a>
              </FooterListItem>
            </FooterSocialGroup>
          </ul>
        </div>
        <div>
          <h5>
            <span className='primary'>//</span> GET IN TOUCH
          </h5>
          <Underline />
          <ul>
            <FooterListItem>
              <NavLink className='footer-link' to='/contact'>
                CONTACT
              </NavLink>
            </FooterListItem>
            <FooterListItem>EMAIL</FooterListItem>
            <FooterListItem>ADDRESS</FooterListItem>
            <FooterListItem>PHONE</FooterListItem>
          </ul>
        </div>
        <div>
          <h5>
            <span className='primary'>//</span> OTHER
          </h5>
          <Underline />
          <ul>
            <FooterListItem>FAQ</FooterListItem>
            <FooterListItem>SETTINGS</FooterListItem>
            <FooterListItem>TERMS</FooterListItem>
          </ul>
        </div>
      </ListsContainer>
      <CopyContainer>
        <small>
          <span className='secondary'>&copy;</span>Copyright {currentYear}{' '}
          <span className='primary'>
            <a className='copy-text' href='https://www.ericdolly.com'>
              www.EricDolly.com
            </a>
          </span>
        </small>
      </CopyContainer>
    </Container>
  );
};

export default Footer;
