import styled from 'styled-components';
import Header from '../components/Header';
// import MobileMenu from '../components/MobileMenu';

const PageLayout = styled.div`
  background-color: green;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 2.4rem;
`;

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <Header />
      {/* <MobileMenu onMenuClick={props.onMenuClick} /> */}
      <main>{children}</main>
    </PageLayout>
  );
};

export default Layout;
