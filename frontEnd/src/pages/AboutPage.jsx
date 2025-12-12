import { useState } from "react";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import MePose from "../assets/profile-picture-pose.webp";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import ResponsiveImage from "../components/ResponsiveImage";

const AboutPage = () => {
  const [showMoreActive, setShowMoreActive] = useState(false);
  return (
    <Layout>
      <PageTitle title="About Me" />
      <div className="about-wrapper">
        <div className="img-container">
          <ResponsiveImage
            className="me-img"
            src={MePose}
            alt="Eric Dollinger - About"
            loading="lazy"
            width="800"
            height="auto"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">
            <span className="primary">{"//"}</span> Meet the Developer
          </h2>
          <br />
          <p>
            My name is Eric Dollinger, and Im a 32-year-old Web Developer based
            in Omaha, Nebraska. I specialize in front-end development with
            ReactJS, but I also have strong familiarity with back-end
            technologies as well as a wide range of languages, frameworks, and
            libraries across the full stack.
          </p>
          <br />
          <p>
            I began my journey as a self-taught developer, starting with simple
            projects as a hobby. As my passion grew, I transitioned into a
            career path—taking on structured coursework, certifications,
            challenges, and workshops led by some of the top developers in the
            industry.
          </p>
          <br />
          <div
            className="show"
            style={{ display: showMoreActive ? "block" : "none" }}
          >
            <p>
              I graduated with honors from Nucamp, and I hold several additional
              certifications, all of which can be viewed on my{" "}
              <a href="https://www.linkedin.com/in/eric-dollinger/">Linkedin</a>{" "}
              profile. I bring 4-5 years of hands-on experience, and I'm
              committed to continuously expanding my skill set. I make it a
              priority to stay current with the latest best practices, design
              patterns, technologies, and industry standards.
            </p>
            <br />
            <p>
              I invite you to explore my portfolio and see the projects, skills,
              and solutions I've developed.
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
