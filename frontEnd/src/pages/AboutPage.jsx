import { useState } from "react";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import MePose from "../assets/profile-picture-pose.png";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const AboutPage = () => {
  const [showMoreActive, setShowMoreActive] = useState(false);
  return (
    <Layout>
      <PageTitle title="About Me" />
      <div className="about-wrapper">
        <div className="img-container">
          <img className="me-img" src={MePose} alt="me" />
        </div>
        <div className="about-content">
          <h2 className="about-title">
            <span className="primary">{"//"}</span> Who Am I?
          </h2>

          <p>
            My name is Eric Dollinger. I am a 32 year old Web Developer based
            out of Omaha, Nebraska. I specialize in the Front End side using
            ReactJS but I am familiar with a lot of the Back End as well as many
            other languages, frameworks, and libraries.
          </p>
          <div
            className="show"
            style={{ display: showMoreActive ? "block" : "none" }}
          >
            <br />
            <p>
              I am mostly self taught as I started Web Development as a hobby.
              As I began to transition my hobby to more career oriented, is when
              I started to participate in classes, certifications, challenges,
              and presentations from the top Developers in the industry.
            </p>
            <br />
            <p>
              I graduated from Nucamp with honors and have many certifications
              that be can viewed on my{" "}
              <a href="https://www.linkedin.com/in/eric-dollinger/">Linkedin</a>{" "}
              page. I currently have about 4-5 years of experience but am
              constantly learning. I stay up to date with all the current best
              practices, trends and industry standards. I invite you to explore
              my portfolio further and see some of my projects and skills.
            </p>
            <br />
            <p>
              Thank you for taking the time to show interest in my portfolio. If
              you have any questions or comments, please visit my{" "}
              <a href="/contact">contact</a> page and send me a message there. I
              appreciate your time.
            </p>
          </div>
          <span
            className="about-span"
            style={{ display: !showMoreActive ? "flex" : "none" }}
            onClick={() => {
              setShowMoreActive(true);
            }}
          >
            Show More
            <BsFillCaretDownFill className="show" />
          </span>
          <span
            className="about-span"
            style={{ display: showMoreActive ? "flex" : "none" }}
            onClick={() => {
              setShowMoreActive(false);
            }}
          >
            Show Less
            <BsFillCaretUpFill className="show" />
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
