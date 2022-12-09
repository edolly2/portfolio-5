import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';

const MobileMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  /* width: 100%; */
  /* height: 100%; */
  z-index: 2;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
`;

const MobileNav = styled.nav`
  width: 100%;
`;

const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem 0;
  /* color: white; */
`;

const MobileNavListItem = styled.li`
  /* color: white; */
  /* text-decoration: none; */
`;

const MobileMenu = (props) => {
  return (
    <MobileMenuWrapper style={props.style}>
      <TfiClose className='icon exit-icon' onClick={props.onExitClick} />
      <MobileNav>
        <MobileNavList>
          <MobileNavListItem onClick={props.onNavLinkClick}>
            <NavLink className='nav-link' to='/'>
              HOME
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onNavLinkClick}>
            <NavLink className='nav-link' to='/about'>
              ABOUT
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onNavLinkClick}>
            <NavLink className='nav-link' to='/skills'>
              SKILLS
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onNavLinkClick}>
            <NavLink className='nav-link' to='/projects'>
              PROJECTS
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onNavLinkClick}>
            <NavLink className='nav-link' to='/contact'>
              CONTACT
            </NavLink>
          </MobileNavListItem>
          <MobileNavListItem>BLOG</MobileNavListItem>
        </MobileNavList>
      </MobileNav>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
