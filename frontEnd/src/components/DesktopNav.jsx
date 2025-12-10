import { NavLink } from "react-router-dom";
import Button from "./Button";

// Styles moved to DesktopNav.css

const DesktopNav = (props) => {
  return (
    <div className="desktopnav-container" style={props.DesktopNavStyle}>
      <nav>
        <ul className="desktopnav-list">
          <li className="nav-link">
            <NavLink className="nav-link" onClick={props.onNavLinkClick} to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/skills"
            >
              SKILLS
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/blog"
            >
              <Button text="Hire Me" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNav;
