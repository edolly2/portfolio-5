import SiteBrand from "./SiteBrand";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div style={{ display: "flex", alignItems: "center", gap: "3.6rem" }}>
        <SiteBrand />
        <h4 className="footer-title">
          <span className="primary">&lt;</span> THANKS FOR VISITING{" "}
          <span className="primary">/&gt;</span>
        </h4>
      </div>
      <div className="underline" />
      <div className="lists-container">
        <div>
          <h5>
            <span className="primary">{"//"}</span> SITE MAP
          </h5>
          <div className="underline" />
          <ul>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/skills">
                SKILLS
              </NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/blog">
                BLOG
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h5>
            <span className="primary">{"//"}</span> FOLLOW ME
          </h5>
          <div className="underline" />
          <ul>
            <div className="footer-social-group">
              <li className="footer-list-item">
                <a href="https://github.com/edolly2">
                  <FaGithub className="icon" />
                </a>
              </li>
              <li className="footer-list-item">
                <a href="https://www.linkedin.com/in/eric-dollinger/">
                  <FaLinkedinIn className="icon" />
                </a>
              </li>
            </div>
            <div className="footer-social-group">
              <li className="footer-list-item">
                <a href="https://facebook.com/dev.dollinger/">
                  <FaFacebook className="icon" />
                </a>
              </li>
              <li className="footer-list-item">
                <a href="https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01">
                  <FaTwitter className="icon" />
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h5>
            <span className="primary">{"//"}</span> GET IN TOUCH
          </h5>
          <div className="underline" />
          <ul>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
            <li className="footer-list-item">EMAIL</li>
            <li className="footer-list-item">ADDRESS</li>
            <li className="footer-list-item">PHONE</li>
          </ul>
        </div>
        <div>
          <h5>
            <span className="primary">{"//"}</span> OTHER
          </h5>
          <div className="underline" />
          <ul>
            <li className="footer-list-item">FAQ</li>
            <li className="footer-list-item">SETTINGS</li>
            <li className="footer-list-item">TERMS</li>
          </ul>
        </div>
      </div>
      <div className="copy-container">
        <small>
          <span className="secondary">&copy;</span>Copyright {currentYear}{" "}
          <span className="primary">
            <a className="copy-text" href="https://www.ericdolly.com">
              www.EricDolly.com
            </a>
          </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
