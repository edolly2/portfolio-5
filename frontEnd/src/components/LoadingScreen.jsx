import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SiteBrand from './SiteBrand';

const loadingAnimation = keyframes`
0% {
width: 0px;
}
25% {
  width: 55px;
}
50% {
  width: 80px;
}
75% {
  width: 105px;
}
100% {
  width: 130px;
}
`;

const loadingProgress = keyframes`
0% {
  content: "0%";
}
25% {
  content: "25%";
}
50% {
  content: "50%";
}
75% {
  content: "75%";
}
100% {
  content: "100%";
}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: none;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
`;

const LoadingBar = styled.div`
  width: 100px;
  height: 8px;
  background-color: white;
  /* border: 8px solid; */
  /* border-color: #3d5af1 transparent #3d5af1 transparent; */
  /* border-radius: 50%; */
  animation: ${loadingAnimation} 2.5s linear infinite;
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 16px 0;
`;

const LoadingContentTitle = styled.h1`
  /* margin: 0 0 8px 0; */
  color: #5c98d9;
`;

const LoadingText = styled.span`
  /* position: absolute; */
  color: #5c98d9;
  &::after {
    content: '';
    animation: ${loadingProgress} 2.5s linear infinite;
  }
`;

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Container style={{ display: loading ? 'flex' : 'none' }}>
      {loading ? (
        <LoadingContainer>
          <LoadingContent>
            <SiteBrand className='loading-logo' />
            <LoadingContentTitle>
              <span className='primary'>&lt;</span>{' '}
              <span className='primary'>Eric</span>{' '}
              <span className='secondary'>Dollinger</span>{' '}
              <span className='primary'>/&gt;</span>
            </LoadingContentTitle>
          </LoadingContent>
          <LoadingBar />
          <LoadingText></LoadingText>
        </LoadingContainer>
      ) : null}
    </Container>
  );
};

export default LoadingScreen;
