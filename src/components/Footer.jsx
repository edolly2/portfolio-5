import styled from 'styled-components';
import SiteBrand from './SiteBrand';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

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

const ListsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  white-space: nowrap;
`;

const Underline = styled.div`
  background-color: rgba(119, 119, 119, 0.6);
  width: 100%;
  height: 2px;
  margin: 0 auto;
`;

const FooterListItem = styled.li`
  font-size: 1.2rem;
`;

const FooterSocialGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const Footer = () => {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3.6rem' }}>
        <SiteBrand />
        <h4>
          <span className='primary'>//</span> THANKS FOR VISITING
        </h4>
      </div>
      <Underline />
      <ListsContainer>
        <div>
          <h5>
            <span className='primary'>//</span> SITE MAP
          </h5>
          <Underline />
          <ul>
            <FooterListItem>HOME</FooterListItem>
            <FooterListItem>ABOUT</FooterListItem>
            <FooterListItem>SKILLS</FooterListItem>
            <FooterListItem>PROJECTS</FooterListItem>
            <FooterListItem>CONTACT</FooterListItem>
            <FooterListItem>BLOG</FooterListItem>
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
                <FaLinkedinIn className='icon' />
              </FooterListItem>
            </FooterSocialGroup>
            <FooterSocialGroup>
              <FooterListItem>
                <FaFacebook className='icon' />
              </FooterListItem>
              <FooterListItem>
                <FaTwitter className='icon' />
              </FooterListItem>
            </FooterSocialGroup>
          </ul>
        </div>
        <div>
          <h5>Title</h5>
          <Underline />
          <ul>
            <FooterListItem>contact</FooterListItem>
            <FooterListItem>contact</FooterListItem>
            <FooterListItem>contact</FooterListItem>
            <FooterListItem>contact</FooterListItem>
          </ul>
        </div>
        <div>
          <h5>Title</h5>
          <Underline />
          <ul>
            <FooterListItem>FAQ</FooterListItem>
            <FooterListItem>Settings</FooterListItem>
            <FooterListItem>Terms</FooterListItem>
            <FooterListItem>copyright</FooterListItem>
          </ul>
        </div>
      </ListsContainer>
      <div>Copyright</div>
    </Container>
  );
};

export default Footer;
