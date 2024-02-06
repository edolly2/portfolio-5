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
  const checkModal = () => {
    if (isDisabled) {
      document.body.style.overflowY = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = 'visible';
    }
  };
  return (
    <Layout>
      <PageTitle title='Socials' />
      <SocialContact />
      <PageTitle title='Get In Touch' />
      <ContactForm
        onSubmitClick={() => {
          setIsDisabled(false);
          checkModal();
        }}
      />
      <SubmitModal
        modalClassName={isDisabled ? 'hidden' : 'flex'}
        onModalClick={() => {
          setIsDisabled(true);
          checkModal();
          navigate('/');
        }}
      />
    </Layout>
  );
};

export default ContactPage;
