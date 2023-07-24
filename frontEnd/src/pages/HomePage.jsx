import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import Card from '../components/Card';
import HomeInfo from '../components/HomeInfo';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 4.8rem;
  /* max-height: 400px; */
  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    /* max-height: auto; */
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <PageTitle title='Eric Dollinger' />
      <Wrapper>
        <Card className='card' />
        <HomeInfo className='home-info' />
      </Wrapper>
    </Layout>
  );
};

export default HomePage;
