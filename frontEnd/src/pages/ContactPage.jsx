import styled from 'styled-components';
import PageTitle from '../layout/PageTitle';
import Layout from '../layout/Layout';
import ContactForm from '../components/contactForm/ContactForm';
import HomePage from './HomePage';
import SocialContact from '../components/SocialContact';
import SubmitModal from '../components/SubmitModal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout>
      <PageTitle title='Socials' />
      <SocialContact />
      <PageTitle title='Get In Touch' />
      <ContactForm onSubmitClick={() => setIsDisabled(false)} />
      <SubmitModal
        modalClassName={isDisabled ? 'hidden' : 'flex'}
        onModalClick={() => {
          setIsDisabled(true);
          navigate('/');
        }}
      />
    </Layout>
  );
};

export default ContactPage;
