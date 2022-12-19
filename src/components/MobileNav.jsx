import styled from 'styled-components';
// import Logo from '../assets/my-logo.png';
import { CgMenuGridO } from 'react-icons/cg';
// import DarkMode from './DarkMode';
// import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.6rem;
`;
const MobileNav = (props) => {
  return (
    <NavWrapper>
      {/* <DarkMode /> */}
      <CgMenuGridO className='icon menu-icon' onClick={props.onMenuClick} />
    </NavWrapper>
  );
};

export default MobileNav;
