import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaLinux,
} from "react-icons/fa";
import { SiJavascript, SiPhp, SiMongodb } from "react-icons/si";
import { BsFillCaretRightFill } from "react-icons/bs";

const SkillsPage = () => {
  return (
    <Layout>
      <PageTitle title="Skills" />
      <div className="skills-container">
        <div className="skills-wrapper">
          <div className="skills-section">
            <h2>
              <span className="primary">{"//"}</span> Operating System
            </h2>
            <div className="wrapper-one">
              <div className="wrapper-two center">
                Linux
                <FaLinux />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>
          </div>

          <div className="skills-section">
            <h2>
              <span className="primary">{"//"}</span> Main Skills
            </h2>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                HTML
                <FaHtml5 />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                CSS
                <FaCss3Alt />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                JavaScript
                <SiJavascript />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                ReactJS
                <FaReact />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                NodeJS
                <FaNodeJs />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>
          </div>

          <div className="skills-section">
            <h2>
              <span className="primary">{"//"}</span> Soft Skills
            </h2>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                Php
                <SiPhp />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                Sass
                <FaSass />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>

            <div className="wrapper-one">
              <div className="wrapper-two center">
                MongoDB
                <SiMongodb />
              </div>
              <span className="skills-span">
                See More <BsFillCaretRightFill />
              </span>
            </div>
          </div>

          <div className="skills-section">
            <h2>
              <span className="primary">{"//"}</span> Education
            </h2>
          </div>

          <div className="skills-section">
            <h2>
              <span className="primary">{"//"}</span> Certifications
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;
