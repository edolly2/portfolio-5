import styled from 'styled-components';
import PageTitle from '../layout/PageTitle';
import Layout from '../layout/Layout';
import ContactForm from '../components/ContactForm';
import HomePage from './HomePage';
import SubmitModal from '../components/SubmitModal';
import { useState, useEffect } from 'react';

const ContactPage = () => {
  const [isDisabled, setIsDisabled] = useState();

  return (
    <Layout>
      <PageTitle title='Get In Touch' />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
