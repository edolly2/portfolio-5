import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import MePose from '../assets/profile-picture-pose.png';
// import PaintStroke from '../assets/paint-splash.png';
// import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

/* background-image: url(${PaintStroke}); */
const ImgContainer = styled.div`
  /* background-repeat: no-repeat; */
  /* background-size: 20rem; */
  /* background-position: center; */
  /* background-position: top 5% left; */
  /* min-height: 100vh; */
  /* min-width: 100vw; */
  padding: 1.6rem;
  text-align: center;
  flex: 1;
`;

const MeImg = styled.img`
  /* width: 200px; */
  width: 50vw;
  max-width: 395px;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutPageContentTitle = styled.h2``;

const AboutPageContent = styled.div`
  flex: 1;
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
`;

const Span = styled.span`
  font-size: 1.2rem;
  margin: 1.6rem 0 0 0;
  font-style: none;
  color: #5c98d9;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: rgb(57, 15, 61);
  }
`;

const Show = styled.div``;

const AboutPage = () => {
  const [showMoreActive, setShowMoreActive] = useState(false);
  return (
    <Layout>
      <PageTitle title='About Me' />
      <Wrapper>
        <ImgContainer>
          <MeImg src={MePose} alt='me' />
        </ImgContainer>
        <AboutPageContent>
          <AboutPageContentTitle>
            <span className='primary'>{'//'}</span> Who Am I?
          </AboutPageContentTitle>

          <p>
            My name is Eric Dollinger. I am a 32 year old Web Developer based
            out of Omaha, Nebraska. I specialize in the Front End side using
            ReactJS but I am familiar with a lot of the Back End as well as many
            other languages, frameworks, and libraries.
          </p>
          <Show style={{ display: showMoreActive ? 'block' : 'none' }}>
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
              that be can viewed on my{' '}
              <a href='https://www.linkedin.com/in/eric-dollinger/'>Linkedin</a>{' '}
              page. I currently have about 4-5 years of experience but am
              constantly learning. I stay up to date with all the current best
              practices, trends and industry standards. I invite you to explore
              my portfolio further and see some of my projects and skills.
            </p>
            <br />
            <p>
              Thank you for taking the time to show interest in my portfolio. If
              you have any questions or comments, please visit my{' '}
              <a href='/contact'>contact</a> page and send me a message there. I
              appreciate your time.
            </p>
          </Show>
          <Span
            style={{ display: !showMoreActive ? 'flex' : 'none' }}
            onClick={() => {
              setShowMoreActive(true);
            }}
          >
            Show More
            <BsFillCaretDownFill className='show' />
          </Span>
          <Span
            style={{ display: showMoreActive ? 'flex' : 'none' }}
            onClick={() => {
              setShowMoreActive(false);
            }}
          >
            Show Less
            <BsFillCaretUpFill className='show' />
          </Span>
        </AboutPageContent>
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;
