import styled from 'styled-components';
import Button from '../components/Button';
import PageTitle from '../layout/PageTitle';
import Layout from '../layout/Layout';
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';

const Form = styled.form`
  padding: 1.6rem;
`;

const FormHeader = styled.p`
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
  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 0.4rem;
  }
`;

const Label = styled.label``;

const Input = styled.input`
  padding: 0.4rem;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.6rem 0;
`;

const TextArea = styled.textarea`
  padding: 0.4rem;
  max-width: 48rem;
  width: 100%;
`;

const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.6rem;
  @media screen and (min-width: 420px) {
    justify-content: center;
    gap: 1.6rem;
  }
`;

const ContactPage = (props) => {
  return (
    <Layout>
      {/* <ContactPageContainer> */}
      <PageTitle title='Get In Touch' />
      <Form>
        <FormHeader>//I Would Love to Hear From You</FormHeader>
        <FormGroup>
          <FormControl>
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Full Name'
            />
          </FormControl>
          <FormControl>
            <Label htmlFor='email'>Email</Label>
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
          <Label htmlFor='thoughts'>Your Thoughts</Label>
          <TextArea
            name='thoughts'
            id='thoughts'
            rows={10}
            // cols={30}
            placeholder='Thank you for showing interest in my portfolio.'
          />
        </TextAreaWrapper>
        <BtnGroup>
          <Button type='submit' text='Submit' />
          <Button text='Cancel' />
        </BtnGroup>
      </Form>
      {/* </ContactPageContainer> */}
    </Layout>
  );
};

export default ContactPage;
