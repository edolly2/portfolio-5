import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import { BsFillCaretRightFill } from "react-icons/bs";
import TinDog from "../assets/tin-dog-project-img.png";
import Paco from "../assets/paco.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(true);
  };
  return (
    <Layout>
      <PageTitle title="My Work" />
      <div className="projects-page-container">
        <div className="project-section">
          <h2 className="project-section-title">
            <span className="primary">{"//"}</span> Websites
          </h2>
          <div className="project-section-content">
            <div className="section-wrapper">
              <div
                className="project-img-overlay"
                style={{ display: isHovering ? "flex" : "none" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h2>VIEW</h2>
              </div>
              <img
                className="project-img"
                src={TinDog}
                alt="TinDog project"
                loading="lazy"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="section-wrapper">
              <div
                className="project-img-overlay"
                style={{ display: isHovering ? "flex" : "none" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <h2>VIEW</h2>
              </div>
              <img
                className="project-img"
                src={Paco}
                alt="Paco project"
                loading="lazy"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="section-wrapper"></div>
          </div>
          <Link to="/projects/all-websites">
            <a className="view-all" href="#">
              VIEW ALL <BsFillCaretRightFill />
            </a>
          </Link>
        </div>

        <div className="project-section">
          <h2 className="project-section-title">
            <span className="primary">{"//"}</span> React Native
          </h2>
          <div className="project-section-content">
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
          </div>
          <a className="view-all" href="#">
            VIEW ALL <BsFillCaretRightFill />
          </a>
        </div>

        {/* <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>{'//'}</span> EBooks
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
          <ViewAll href='#'>
            VIEW ALL <BsFillCaretRightFill />
          </ViewAll>
        </ProjectSection> */}

        <div className="project-section">
          <h2 className="project-section-title">
            <span className="primary">{"//"}</span> Resources
          </h2>
          <div className="project-section-content">
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
          </div>
          <a className="view-all" href="#">
            VIEW ALL <BsFillCaretRightFill />
          </a>
        </div>

        <div className="project-section">
          <h2 className="project-section-title">
            <span className="primary">{"//"}</span> Libraries
          </h2>
          <div className="project-section-content">
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
          </div>
          <a className="view-all" href="#">
            VIEW ALL <BsFillCaretRightFill />
          </a>
        </div>

        <div className="project-section">
          <h2 className="project-section-title">
            <span className="primary">{"//"}</span> For Fun
          </h2>
          <div className="project-section-content">
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
            <div className="section-wrapper"></div>
          </div>
          <a className="view-all" href="#">
            VIEW ALL <BsFillCaretRightFill />
          </a>
        </div>
        {/* <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>{'//'}</span> Blog
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
        </ProjectSection> */}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
