import React from 'react';
import Layout from '../layout/Layout';
import PageTitle from '../layout/PageTitle';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ReturnTextContainer = styled.div`
  text-align: center;
`;
const ErrorText = styled.h1`
  font-size: 96px;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <PageTitle title='Where are you going?' />
      <ErrorText>
        <span className='neutral'>404</span> Page Not Found
      </ErrorText>
      <ReturnTextContainer>
        Please return to the{' '}
        <NavLink to='/' className='nav-link-alt'>
          home page
        </NavLink>
      </ReturnTextContainer>
    </Layout>
  );
};

export default NotFoundPage;
