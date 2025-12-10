import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

// Styles moved to SocialContact.css

function SocialContact() {
  return (
    <div className="social-contact-container">
      <div className="icon-container">
        <a className="icon-title" href="https://github.com/edolly2">
          <div className="social-title">
            <span className="primary">&lt;</span>{" "}
            <span className="secondary">GitHub</span>{" "}
            <span className="primary">/&gt;</span>
          </div>
          <FaGithub className="contact-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a
          className="icon-title"
          href="https://www.linkedin.com/in/eric-dollinger/"
        >
          <div className="social-title">
            <span className="primary">&lt;</span>{" "}
            <span className="secondary">Linkedin</span>{" "}
            <span className="primary">/&gt;</span>
          </div>
          <FaLinkedinIn className="contact-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a className="icon-title" href="https://facebook.com/dev.dollinger/">
          <div className="social-title">
            <span className="primary">&lt;</span>{" "}
            <span className="secondary">Facebook</span>{" "}
            <span className="primary">/&gt;</span>
          </div>
          <FaFacebook className="contact-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a
          className="icon-title"
          href="https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01"
        >
          <div className="social-title">
            <span className="primary">&lt;</span>{" "}
            <span className="secondary">Twitter</span>{" "}
            <span className="primary">/&gt;</span>
          </div>
          <FaTwitter className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default SocialContact;
