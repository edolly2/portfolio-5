import styled from 'styled-components';
import Button from '../components/Button';
import PageTitle from '../layout/PageTitle';
import Layout from '../layout/Layout';
import HomePage from './HomePage';
import { Routes, Route, NavLink } from 'react-router-dom';
import SubmitModal from '../components/SubmitModal';
import { useState } from 'react';

const Form = styled.form`
  padding: 1.6rem;
`;

const FormHeader = styled.h3`
  text-align: center;
  margin-bottom: 2.4rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  /* margin-bottom: 1.6rem; */
  @media screen and (min-width: 486px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.6rem;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 0.4rem;
  }
`;

const Label = styled.label`
  color: #5c98d9;
`;

const Input = styled.input`
  padding: 0.4rem;
  border: 2px solid transparent;
  color: rgb(57, 15, 61);
  &:focus {
    border: 2px solid #5c98d9;
  }
`;

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.6rem 0;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  max-width: 48rem;
  width: 100%;
  border: 2px solid transparent;
  color: rgb(57, 15, 61);
  &:focus {
    border: 2px solid #5c98d9;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: 420px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 1.6rem;
  }
`;

const ContactPage = (props) => {
  const [status, setStatus] = useState('SUBMIT');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('SUBMIT');
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Layout>
      {/* <SubmitModal style={{ display: isSubmitActive ? 'flex' : 'none' }} /> */}
      {/* <ContactPageContainer> */}
      <PageTitle title='Get In Touch' />
      <Form onSubmit={handleSubmit}>
        <FormHeader>
          <span className='primary'>//</span> I Would Love to Hear From You
        </FormHeader>
        <FormGroup>
          <FormControl>
            <Label htmlFor='name'>NAME</Label>
            <Input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Full Name'
            />
          </FormControl>
          <FormControl>
            <Label htmlFor='email'>EMAIL</Label>
            <Input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Example@email.com'
            />
          </FormControl>
        </FormGroup>
        <TextAreaWrapper>
          <Label htmlFor='message'>YOUR THOUGHTS</Label>
          <TextArea
            name='message'
            id='message'
            required
            rows={10}
            // cols={30}
            placeholder='Thank you for showing interest in my portfolio.'
          />
        </TextAreaWrapper>
        <BtnGroup>
          <Button type='submit' text={status} />
          <NavLink to='/'>
            <Button text='CANCEL' />
          </NavLink>
        </BtnGroup>
      </Form>
      {/* </ContactPageContainer> */}
    </Layout>
  );
};

export default ContactPage;
