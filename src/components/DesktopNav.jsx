import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import DarkMode from './DarkMode';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 1.6rem;
`;
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
          {/* <DarkMode /> */}
          <NavListItem>
            <NavLink
              className='nav-link'
              style={{ marginLeft: '2.4rem' }}
              onClick={props.onNavLinkClick}
              to='/'
            >
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/about'
            >
              About
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/skills'
            >
              Skills
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/projects'
            >
              Projects
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/contact'
            >
              Contact
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/blog'
            >
              Blog
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default DesktopNav;
