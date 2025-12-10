import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import Card from "../components/Card";
import HomeInfo from "../components/HomeInfo";

const HomePage = () => {
  return (
    <Layout>
      <PageTitle title="Eric Dollinger" />
      <div className="home-wrapper">
        <Card className="card" />
        <HomeInfo className="home-info" />
      </div>
    </Layout>
  );
};

export default HomePage;
