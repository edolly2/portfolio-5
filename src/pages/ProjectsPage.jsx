import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';

const ProjectsPageContainer = styled.div``;

const ProjectsPage = () => {
  return (
    <Layout>
      <PageTitle title='My Work' />
      <ProjectsPageContainer>
        <h2>
          <span className='primary'>//</span> Websites
        </h2>
        <h2>
          <span className='primary'>//</span> Blog
        </h2>
        <h2>
          <span className='primary'>//</span> EBooks
        </h2>
        <h2>
          <span className='primary'>//</span> Resources
        </h2>
        <h2>
          <span className='primary'>//</span> Component Library
        </h2>
        <h2>
          <span className='primary'>//</span> For Fun
        </h2>
      </ProjectsPageContainer>
    </Layout>
  );
};

export default ProjectsPage;
