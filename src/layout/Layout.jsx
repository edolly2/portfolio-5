import styled from 'styled-components';
// import Header from '../components/Header';
// import Planet from '../assets/planet.jpg';
// import MobileMenu from '../components/MobileMenu';

const PageLayout = styled.div`
  /* background-color: green; */
  /* background-color: rgba(119, 119, 119, 0.3); */
  /* backdrop-filter: blur(5px); */
  max-width: 1080px;
  margin: 0 auto;
  /* padding: 2.4rem; */
  padding: 1.6rem;
  min-height: 85vh;
  /* min-height: 100%; */
  overflow: hidden;
`;

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <main>{children}</main>
    </PageLayout>
  );
};

export default Layout;
