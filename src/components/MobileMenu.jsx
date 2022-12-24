import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background-color: rgba(119, 119, 119);
  backdrop-filter: blur(5px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 4;
  padding: 2.4rem 0;
`;

const MobileNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 4;
`;
const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`;
const MobileNavListItem = styled.li``;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const MobileMenu = (props) => {
  return (
    <MenuContainer style={props.mobileMenuStyle}>
      <MobileNav>
        <MobileNavList>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink className='nav-link' to='/'>
              HOME
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink className='nav-link' to='/about'>
              ABOUT
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink className='nav-link' to='/skills'>
              SKILLS
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink className='nav-link' to='/projects'>
              PROJECTS
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink className='nav-link' to='/contact'>
              CONTACT
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink className='nav-link' to='/blog'>
              BLOG
            </NavLink>
          </MobileNavListItem>
        </MobileNavList>
      </MobileNav>
      <SocialContainer>
        <a href='https://github.com/edolly2'>
          <FaGithub className='icon' />
        </a>
        <FaLinkedinIn className='icon' />
        <FaFacebook className='icon' />
        <FaTwitter className='icon' />
      </SocialContainer>
    </MenuContainer>
  );
};

export default MobileMenu;
