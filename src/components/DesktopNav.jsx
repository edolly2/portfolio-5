import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div``;
const Nav = styled.nav``;
const NavList = styled.ul``;
const NavListItem = styled.li``;

const DesktopNav = () => {
  return (
    <Container>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink to='/'>Home</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to='/about'>About</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to='/skills'>Skills</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to='/projects'>Projects</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to='/contact'>Contact</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to='/blog'>Blog</NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default DesktopNav;
