import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import styled from 'styled-components';

const Container = styled.header``;

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 769;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return width < breakpoint ? (
    <Container>
      <MobileNav
        onClick={() => {
          setIsMobileMenuActive(!isMobileMenuActive);
        }}
        mobileNavStyle={{ display: isMobileMenuActive ? 'flex' : 'none' }}
      />
    </Container>
  ) : (
    <Container>
      <DesktopNav onContactClick={props.onContactClick} />
    </Container>
  );
};

export default Header;
