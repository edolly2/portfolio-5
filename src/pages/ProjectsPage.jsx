import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import { BsFillCaretRightFill } from 'react-icons/bs';

const ProjectsPageContainer = styled.div`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
`;

const ProjectSection = styled.div`
  margin-bottom: 3.6rem;
`;

const ProjectSectionTitle = styled.h2``;

const ProjectSectionContent = styled.div`
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
  min-height: 10vh;
  background-color: white;
  @media screen and (min-width: 768px) {
    min-width: 20rem;
    min-height: 10rem;
  }
`;

const ViewAll = styled.a`
  margin-top: 1.6rem;
  font-size: 1.2rem;
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

const ProjectsPage = () => {
  return (
    <Layout>
      <PageTitle title='My Work' />
      <ProjectsPageContainer>
        <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>//</span> Websites
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
          <ViewAll href='#'>
            VIEW ALL <BsFillCaretRightFill />
          </ViewAll>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>//</span> Blog
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>//</span> EBooks
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
          <ViewAll href='#'>
            VIEW ALL <BsFillCaretRightFill />
          </ViewAll>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>//</span> Resources
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
          <ViewAll href='#'>
            VIEW ALL <BsFillCaretRightFill />
          </ViewAll>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>//</span> Component Library
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
          <ViewAll href='#'>
            VIEW ALL <BsFillCaretRightFill />
          </ViewAll>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionTitle>
            <span className='primary'>//</span> For Fun
          </ProjectSectionTitle>
          <ProjectSectionContent>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
            <SectionWrapper></SectionWrapper>
          </ProjectSectionContent>
          <ViewAll href='#'>
            VIEW ALL <BsFillCaretRightFill />
          </ViewAll>
        </ProjectSection>
      </ProjectsPageContainer>
    </Layout>
  );
};

export default ProjectsPage;
