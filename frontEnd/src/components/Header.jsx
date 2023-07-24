import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import styled from 'styled-components';
import SiteBrand from './SiteBrand';

const Container = styled.header`
  position: relative;
  display: flex;
  /* align-items: center; */
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
  padding: 0.8rem;
  z-index: 4;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
`;

// const Overlay = styled.div`
//   position: absolute;
//   /* z-index: 1; */
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100vw;
//   height: 100vh;
// `;

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 769;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    <Container
      style={{
        borderBottomLeftRadius: isMobileMenuActive ? '0' : '0.4rem',
        borderBottomRightRadius: isMobileMenuActive ? '0' : '0.4rem',
      }}
    >
      <SiteBrand />
      <MobileNav
        onMenuClick={() => {
          setIsMobileMenuActive(!isMobileMenuActive);
        }}
      />
      <MobileMenu
        mobileMenuStyle={{ display: isMobileMenuActive ? 'flex' : 'none' }}
        onMenuItemClick={() => {
          setIsMobileMenuActive(false);
        }}
      />
    </Container>
  ) : (
    <Container>
      <SiteBrand />
      <DesktopNav onContactClick={props.onContactClick} />
    </Container>
  );
};

export default Header;
