import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import styled from 'styled-components';
import SiteBrand from './SiteBrand';

const Container = styled.header`
  position: relative;
  display: flex;
  background-color: rgba(119, 119, 119, 0.5);
  backdrop-filter: blur(5px);
`;

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 769;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    <Container>
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
