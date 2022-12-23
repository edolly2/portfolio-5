import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(119, 119, 119, 0.5);
  border-radius: 0.8rem;
  padding: 2.4rem;
  align-items: center;
  gap: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.3);
  backdrop-filter: blur(5px);
  /* z-index: 1; */
`;

const HomeInfoTitle = styled.h2`
  align-self: flex-start;
`;

const HomeInfoContent = styled.div``;

const HomeInfoList = styled.ul``;

const HomeInfoListItem = styled.li``;

const HomeInfoParaTitle = styled.h3`
  margin: 2.4rem 0 0 0;
`;

const HomeInfoPara = styled.p``;

const HomeInfo = () => {
  return (
    <Container>
      <HomeInfoTitle>
        <span className='purple'>//</span>{' '}
        <span className='white'>Web Developer</span>
      </HomeInfoTitle>
      <HomeInfoContent>
        <HomeInfoList>
          <HomeInfoListItem>Name: Eric Dollinger</HomeInfoListItem>
          <HomeInfoListItem>From: Omaha, Nebraska</HomeInfoListItem>
          <HomeInfoListItem>Age: 31</HomeInfoListItem>
          <HomeInfoListItem>Title: Web Developer</HomeInfoListItem>
        </HomeInfoList>
        <HomeInfoParaTitle>
          <span className='purple'>//</span> <span className='white'>Bio</span>
        </HomeInfoParaTitle>
        <HomeInfoPara>
          I am a 31 year old Web Developer based out of Omaha, Nebraska. I
          specialize in the Front End side using ReactJS but I am familiar with
          a lot of the Back End as well as many other languages, frameworks, and
          libraries. Feel free to look around to find out more, see my work and
          projects, shoot me a message, and much more.
        </HomeInfoPara>
      </HomeInfoContent>
    </Container>
  );
};

export default HomeInfo;
