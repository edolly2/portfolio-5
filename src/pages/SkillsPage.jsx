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

const SkillsPage = () => {
  return (
    <Layout>
      <PageTitle title='Skills' />
      <SkillsContainer>
        <SkillsWrapper>
          <h2>
            <span className='primary'>//</span> Operating System
          </h2>
          Linux
          <FaLinux />
        </SkillsWrapper>
        <SkillsWrapper>
          <h2>
            <span className='primary'>//</span> Main Skills
          </h2>
          HTML
          <FaHtml5 />
          CSS
          <FaCss3Alt />
          JavaScript
          <SiJavascript />
          ReactJS
          <FaReact />
          NodeJS
          <FaNodeJs />
        </SkillsWrapper>
        <SkillsWrapper>
          <h2>
            <span className='primary'>//</span> Soft Skills
          </h2>
          Php
          <SiPhp />
          Sass
          <FaSass />
          MongoDB
          <SiMongodb />
        </SkillsWrapper>
      </SkillsContainer>
    </Layout>
  );
};

export default SkillsPage;
