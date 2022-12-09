import styled from 'styled-components';
import Logo from '../assets/my-logo.png';
import { CgMenuGridO } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MobileNav = (props) => {
  return (
    <NavWrapper>
      <CgMenuGridO className='icon menu-icon' onClick={props.onMenuClick} />
    </NavWrapper>
  );
};

export default MobileNav;
