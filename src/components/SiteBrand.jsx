import Logo from '../assets/my-logo.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// const NavWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

const SiteBrandWrapper = styled.div`
  display: flex;
`;

const SiteBrandImg = styled.img`
  width: calc(4rem + 1.5vw);
  height: auto;
`;

const SiteBrand = () => {
  return (
    <SiteBrandWrapper>
      <NavLink className='h-center' to='/'>
        <SiteBrandImg src={Logo} alt='Logo with the letters E and D' />
      </NavLink>
    </SiteBrandWrapper>
  );
};

export default SiteBrand;
