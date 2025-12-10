import React from "react";
import Layout from "../layout/Layout";
import PageTitle from "../layout/PageTitle";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Layout>
      <PageTitle title="Where are you going?" />
      <h1 className="notfound-error-text">
        <span className="neutral">404</span> Page Not Found
      </h1>
      <div className="notfound-return-text">
        Please return to the{" "}
        <NavLink to="/" className="nav-link-alt">
          home page
        </NavLink>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
