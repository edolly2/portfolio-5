import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background-color: blue;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const MobileNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`;
const MobileNavListItem = styled.li``;

const MobileMenu = (props) => {
  return (
    <MenuContainer style={props.mobileMenuStyle}>
      <MobileNav>
        <MobileNavList>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink to='/'>Home</NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink to='/about'>About</NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink to='/skills'>Skills</NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink to='/projects'>Projects</NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink to='/contact'>Contact</NavLink>
          </MobileNavListItem>
          <MobileNavListItem onClick={props.onMenuItemClick}>
            <NavLink to='/blog'>Blog</NavLink>
          </MobileNavListItem>
        </MobileNavList>
      </MobileNav>
    </MenuContainer>
  );
};

export default MobileMenu;
