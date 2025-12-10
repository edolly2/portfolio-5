import React from "react";
import Headshot from "../assets/me-headshot.png";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={`card-wrapper ${props.className || ""}`}>
      <img
        className="card-img"
        src={Headshot}
        alt="Full Stack Developer, Eric Dollinger"
      />
      <div className="card-line" />
      <div className="card-social-wrapper">
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
      <div className="btn-group">
        <NavLink to="/about">
          <Button text="EXPLORE" />
        </NavLink>
        <NavLink to="/contact">
          <Button text="CONTACT" />
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
