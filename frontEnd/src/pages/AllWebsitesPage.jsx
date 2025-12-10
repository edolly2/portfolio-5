import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import { useState } from "react";
import TinDog from "../assets/tin-dog-project-img.png";
import Paco from "../assets/paco.png";
import { Link } from "react-router-dom";
import { BsFillCaretLeftFill } from "react-icons/bs";

const AllWebsitesPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(true);
  };
  return (
    <Layout>
      <PageTitle title="Project Websites" />
      <div className="all-websites-container">
        <div className="website-section">
          <h2>
            <span className="primary">{"//"}</span> All Websites
          </h2>
          <div className="main-wrapper">
            <div className="website-section-content">
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={TinDog}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={Paco}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={Paco}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>
            <div className="website-section-content">
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={Paco}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={Paco}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={Paco}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>
            <div className="website-section-content">
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={TinDog}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={TinDog}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className="section-wrapper">
                <div
                  className="website-img-overlay"
                  style={{ display: isHovering ? "flex" : "none" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </div>
                <img
                  className="website-img"
                  src={TinDog}
                  alt="#"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>
          </div>
          <Link to="/projects">
            <a className="go-back" href="#">
              <BsFillCaretLeftFill /> GO BACK
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AllWebsitesPage;
