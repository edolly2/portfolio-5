import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div``;
const Nav = styled.nav``;
const NavList = styled.ul`
  display: flex;
  gap: 1.6rem;
`;
const NavListItem = styled.li``;

const DesktopNav = (props) => {
  return (
    <Container style={props.DesktopNavStyle}>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink onClick={props.onNavLinkClick} to='/'>
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink onClick={props.onNavLinkClick} to='/about'>
              About
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink onClick={props.onNavLinkClick} to='/skills'>
              Skills
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink onClick={props.onNavLinkClick} to='/projects'>
              Projects
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink onClick={props.onNavLinkClick} to='/contact'>
              Contact
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink onClick={props.onNavLinkClick} to='/blog'>
              Blog
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default DesktopNav;
