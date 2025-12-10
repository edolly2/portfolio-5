import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";

// Styles moved to MobileMenu.css

const MobileMenu = (props) => {
  return (
    <div className="mobile-menu-container" style={props.mobileMenuStyle}>
      <nav className="mobile-nav">
        <ul className="mobile-nav-list">
          <li className="mobile-nav-list-item" onClick={props.onMenuItemClick}>
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="mobile-nav-list-item" onClick={props.onMenuItemClick}>
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="mobile-nav-list-item" onClick={props.onMenuItemClick}>
            <NavLink className="nav-link" to="/skills">
              SKILLS
            </NavLink>
          </li>
          <li className="mobile-nav-list-item" onClick={props.onMenuItemClick}>
            <NavLink className="nav-link" to="/projects">
              PROJECTS
            </NavLink>
          </li>
          <li className="mobile-nav-list-item" onClick={props.onMenuItemClick}>
            <NavLink className="nav-link" to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="mobile-nav-list-item" onClick={props.onMenuItemClick}>
            <NavLink className="nav-link" to="/blog">
              <Button text="Hire Me" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mobile-social-container">
        <a href="https://github.com/edolly2">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/eric-dollinger/">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="https://facebook.com/dev.dollinger/">
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01">
          <FaTwitter className="icon" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
