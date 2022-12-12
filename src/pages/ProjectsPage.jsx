import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';

const ProjectsPageContainer = styled.div``;

const ProjectsPage = () => {
  return (
    <Layout>
      <PageTitle title='My Work' />
      <ProjectsPageContainer>
        <h2>//Client Websites</h2>
        <h2>//Blog</h2>
        <h2>//EBooks</h2>
        <h2>//Resources</h2>
        <h2>//Component Library</h2>
        <h2>//For Fun</h2>
      </ProjectsPageContainer>
    </Layout>
  );
};

export default ProjectsPage;
