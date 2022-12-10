import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import MeStanding from '../assets/me-standing.png';

const AboutPageContainer = styled.div`
  background-image: url(${MeStanding});
  background-repeat: no-repeat;
  background-size: 20rem;
  background-position: top 5% left;
  min-height: 100vh;
  /* min-width: 100vw; */
  padding: 1.6rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <PageTitle title='About Me' />
      <AboutPageContainer></AboutPageContainer>
    </Layout>
  );
};

export default AboutPage;
