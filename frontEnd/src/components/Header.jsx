import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import SiteBrand from "./SiteBrand";

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 769;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    <header
      className="header-container"
      style={{
        borderBottomLeftRadius: isMobileMenuActive ? "0" : "0.4rem",
        borderBottomRightRadius: isMobileMenuActive ? "0" : "0.4rem",
      }}
    >
      <SiteBrand />
      <MobileNav
        onMenuClick={() => {
          setIsMobileMenuActive(!isMobileMenuActive);
        }}
      />
      <MobileMenu
        mobileMenuStyle={{ display: isMobileMenuActive ? "flex" : "none" }}
        onMenuItemClick={() => {
          setIsMobileMenuActive(false);
        }}
      />
    </header>
  ) : (
    <header className="header-container">
      <SiteBrand />
      <DesktopNav onContactClick={props.onContactClick} />
    </header>
  );
};

export default Header;
