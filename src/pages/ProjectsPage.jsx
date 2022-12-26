import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';

const ProjectsPageContainer = styled.div`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
`;

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
