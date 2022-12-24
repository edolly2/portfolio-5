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
              HOME
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/about'
            >
              ABOUT
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/skills'
            >
              SKILLS
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/projects'
            >
              PROJECTS
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/contact'
            >
              CONTACT
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              className='nav-link'
              onClick={props.onNavLinkClick}
              to='/blog'
            >
              BLOG
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export default DesktopNav;
