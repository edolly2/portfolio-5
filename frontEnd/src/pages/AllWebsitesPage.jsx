import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import { useState } from 'react';
import styled from 'styled-components';
import TinDog from '../assets/tin-dog-project-img.png';
import Paco from '../assets/paco.png';
import { Link } from 'react-router-dom';
import { BsFillCaretLeftFill } from 'react-icons/bs';

const AllWebsitesPageContainer = styled.div`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
`;

const WebsiteSection = styled.div`
  margin-bottom: 3.6rem;
`;

const WebsiteSectionTitle = styled.h2``;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const WebsiteSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const SectionWrapper = styled.div`
  flex: 1;
  min-width: 10vw;
  max-height: 10vh;
  background-color: white;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 768px) {
    min-width: 20rem;
    /* max-width: 20rem; */
    min-height: 10rem;
    /* max-height: 10rem; */
  }
`;

const WebsiteImg = styled.img`
  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

const WebsiteImgOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    display: none;
  }
  /* display: none; */
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    cursor: pointer;
    /* display: block; */
    h2 {
      display: block;
    }
  }
`;

const GoBack = styled.a`
  margin-top: 1.6rem;
  font-size: 1.4rem;
  font-style: none;
  color: #5c98d9;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    /* transform: scale(1.1); */
    color: rgb(57, 15, 61);
  }
`;

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
      <PageTitle title='Project Websites' />
      <AllWebsitesPageContainer>
        <WebsiteSection>
          <WebsiteSectionTitle>
            <span className='primary'>{'//'}</span> All Websites
          </WebsiteSectionTitle>
          <MainWrapper>
            <WebsiteSectionContent>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={TinDog}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={Paco}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={Paco}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
            </WebsiteSectionContent>
            <WebsiteSectionContent>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={Paco}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={Paco}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={Paco}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
            </WebsiteSectionContent>
            <WebsiteSectionContent>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={TinDog}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={TinDog}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
              <SectionWrapper>
                <WebsiteImgOverlay
                  style={{ display: isHovering ? 'flex' : 'none' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h2>VIEW</h2>
                </WebsiteImgOverlay>
                <WebsiteImg
                  src={TinDog}
                  alt='#'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </SectionWrapper>
            </WebsiteSectionContent>
          </MainWrapper>
          <Link to='/projects'>
            <GoBack href='#'>
              <BsFillCaretLeftFill /> GO BACK
            </GoBack>
          </Link>
        </WebsiteSection>
      </AllWebsitesPageContainer>
    </Layout>
  );
};

export default AllWebsitesPage;
