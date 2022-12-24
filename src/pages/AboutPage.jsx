import styled from 'styled-components';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import MePose from '../assets/me-pose3.png';
import PaintStroke from '../assets/paint-stroke3.png';

const ImgContainer = styled.div`
  background-image: url(${PaintStroke});
  background-repeat: no-repeat;
  background-size: 20rem;
  background-position: center;
  /* background-position: top 5% left; */
  /* min-height: 100vh; */
  /* min-width: 100vw; */
  padding: 1.6rem;
  text-align: center;
  flex: 1;
`;

const MeImg = styled.img`
  width: 200px;
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
  padding: 1.6rem;
`;

const AboutPage = () => {
  return (
    <Layout>
      <PageTitle title='About Me' />
      <Wrapper>
        <ImgContainer>
          <MeImg src={MePose} alt='me' />
        </ImgContainer>
        <AboutPageContent>
          <AboutPageContentTitle>
            <span className='primary'>//</span> Who Am I?
          </AboutPageContentTitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          animi, eligendi et quibusdam quae porro, hic aliquid dolores tenetur
          facilis autem temporibus dignissimos harum magni? Voluptate blanditiis
          delectus illum quam animi magni fugiat quasi, reprehenderit quae quod,
          laudantium quas voluptas!
        </AboutPageContent>
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;
