import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaLinux,
} from 'react-icons/fa';
import { SiJavascript, SiPhp, SiMongodb } from 'react-icons/si';
import { BsFillCaretRightFill } from 'react-icons/bs';

const SkillsContainer = styled.div`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperOne = styled.div`
  display: flex;
  /* gap: 1.6rem; */
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 1.6rem 0;
`;

const WrapperTwo = styled.div``;

const Span = styled.span`
  font-size: 1.2rem;
  font-style: none;
  color: #5c98d9;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: rgb(57, 15, 61);
  }
`;

const SkillsPage = () => {
  return (
    <Layout>
      <PageTitle title='Skills' />
      <SkillsContainer>
        <SkillsWrapper>
          <h2>
            <span className='primary'>{'//'}</span> Operating System
          </h2>
          <WrapperOne>
            <WrapperTwo className='center'>
              Linux
              <FaLinux />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
        </SkillsWrapper>
        <SkillsWrapper>
          <h2>
            <span className='primary'>{'//'}</span> Main Skills
          </h2>
          <WrapperOne>
            <WrapperTwo className='center'>
              HTML
              <FaHtml5 />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
          <WrapperOne>
            <WrapperTwo className='center'>
              CSS
              <FaCss3Alt />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
          <WrapperOne>
            <WrapperTwo className='center'>
              JavaScript
              <SiJavascript />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
          <WrapperOne>
            <WrapperTwo className='center'>
              ReactJS
              <FaReact />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
          <WrapperOne>
            <WrapperTwo className='center'>
              NodeJS
              <FaNodeJs />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
        </SkillsWrapper>
        <SkillsWrapper>
          <h2>
            <span className='primary'>{'//'}</span> Soft Skills
          </h2>
          <WrapperOne>
            <WrapperTwo className='center'>
              Php
              <SiPhp />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
          <WrapperOne>
            <WrapperTwo className='center'>
              Sass
              <FaSass />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
          <WrapperOne>
            <WrapperTwo className='center'>
              MongoDB
              <SiMongodb />
            </WrapperTwo>
            <Span>
              See More <BsFillCaretRightFill />
            </Span>
          </WrapperOne>
        </SkillsWrapper>
        <SkillsWrapper>
          <h2>
            <span className='primary'>{'//'}</span> Education
          </h2>
        </SkillsWrapper>
        <SkillsWrapper>
          <h2>
            <span className='primary'>{'//'}</span> Certifications
          </h2>
        </SkillsWrapper>
      </SkillsContainer>
    </Layout>
  );
};

export default SkillsPage;
