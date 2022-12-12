import styled from 'styled-components';
import Header from '../components/Header';
// import MobileMenu from '../components/MobileMenu';

const PageLayout = styled.div`
  background-color: green;
  max-width: 1080px;
  margin: 0 auto;
  padding: 2.4rem;
  min-height: 85vh;
  /* min-height: 100%; */
`;

const Layout = ({ children }) => {
  return (
    <PageLayout>
      <main>{children}</main>
    </PageLayout>
  );
};

export default Layout;
