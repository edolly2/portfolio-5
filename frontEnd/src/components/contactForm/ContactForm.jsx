import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './validators.js';
import { useContactFormValidator } from './hooks/useContactFormValidator.js';
import styled from 'styled-components';
import Button from '../Button';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
// import SubmitModal from './SubmitModal';

const Form = styled.form`
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 900px) {
    max-width: 80rem;
    width: 100%;
  }
`;

const FormHeader = styled.h3`
  text-align: center;
  margin-bottom: 3.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.2rem;
  @media screen and (min-width: 486px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.6rem;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0;
  gap: 0.8rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  color: #5c98d9;
  white-space: nowrap;
`;

const Input = styled.input`
  padding: 0.4rem;
  border: 0px solid transparent;
  color: rgb(57, 15, 61);
`;

const Option = styled.option`
  padding: 0.4rem;
  color: rgb(57, 15, 61);
`;

const Select = styled.select`
  padding: 0.4rem;
  color: rgb(134, 134, 134);
  cursor: pointer;
`;

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.4rem 0;
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
  align-items: center;
  gap: 1.6rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Transparent = styled.p`
  color: transparent;
`;

const Error = styled.p`
  color: red;
`;

const TextAreaError = styled.p`
  color: red;
`;

const ErrorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ContactForm = () => {
  const [inputData, setInputData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const { errors, validateForm, onBlurField } =
    useContactFormValidator(inputData);

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'service_gnpn9fg',
    //     'template_a0l7bzn',
    //     form.current,
    //     'Fva2TavNqMx7rnwAh'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    const { isValid } = validateForm({
      inputData,
      errors,
      forceTouchErrors: true,
    });
    if (!isValid) {
      return;
    } else {
      emailjs
        .sendForm(
          'service_gnpn9fg',
          'template_a0l7bzn',
          form.current,
          'Fva2TavNqMx7rnwAh'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    alert(JSON.stringify(inputData, null, 2));
    // navigate('/');
  };

  const handleInputChange = (event) => {
    const field = event.target.name;

    const nextFormState = {
      ...inputData,
      [field]: event.target.value,
    };

    setInputData(nextFormState);
    if (errors[field].dirty)
      validateForm({
        inputData: nextFormState,
        errors,
        field,
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail} noValidate>
      <FormHeader>
        <span className='primary'>{'//'}</span> I Would Love to Hear From You
      </FormHeader>
      <FormGroup>
        <FormControl>
          <Label htmlFor='name'>NAME</Label>
          <ErrorGroup>
            <Input
              id='name'
              type='text'
              name='user_name'
              value={inputData.user_name}
              onChange={handleInputChange}
              placeholder='Full Name'
              aria-label='Name Field'
              onBlur={onBlurField}
              required
            />
            {errors.user_name.dirty && errors.user_name.error ? (
              <Error>{errors.user_name.message}</Error>
            ) : (
              <Transparent>ERROR</Transparent>
            )}
          </ErrorGroup>
        </FormControl>
        <FormControl>
          <Label htmlFor='email'>EMAIL</Label>
          <ErrorGroup>
            <Input
              id='email'
              type='email'
              name='user_email'
              aria-label='Email Field'
              value={inputData.user_email}
              onChange={handleInputChange}
              placeholder='Example@email.com'
              onBlur={onBlurField}
              required
            />
            {errors.user_email.dirty && errors.user_email.error ? (
              <Error>{errors.user_email.message}</Error>
            ) : (
              <Transparent>Error</Transparent>
            )}
          </ErrorGroup>
        </FormControl>
      </FormGroup>
      <FormGroup style={{ marginTop: '1.6rem' }}>
        <FormControl style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Label htmlFor='referrer'>THIS IS IN REFERENCE TO</Label>
          <Select
            name='referrer'
            id='referrer'
            style={{ backgroundColor: 'rgb(255, 255, 255)' }}
          >
            <Option
              name='referrer'
              // value='default'
              selected
              disabled
              style={{
                color: '#868686',
                textAlign: 'center',
                display: 'none',
              }}
            >
              -Select Best Option-
            </Option>
            <Option name='referrer' value='question'>
              Question
            </Option>
            <Option name='referrer' value='suggestion'>
              Suggestions
            </Option>
            <Option name='referrer' value='collaboration'>
              Collaboration
            </Option>
            <Option name='referrer' value='jobOp'>
              Job Opportunity
            </Option>
            <Option name='referrer' value='other'>
              Other
            </Option>
          </Select>
        </FormControl>
      </FormGroup>
      <TextAreaWrapper>
        <Label htmlFor='message'>YOUR THOUGHTS</Label>
        <TextArea
          id='message'
          rows={10}
          placeholder='Thank you for showing interest in my portfolio.'
          name='user_message'
          aria-label='Message Text Area'
          value={inputData.user_message}
          onChange={handleInputChange}
          onBlur={onBlurField}
          required
        />
        {errors.user_message.dirty && errors.user_message.error ? (
          <TextAreaError>{errors.user_message.message}</TextAreaError>
        ) : (
          <Transparent>ERROR</Transparent>
        )}
      </TextAreaWrapper>
      <BtnGroup>
        <button className='btn' type='submit' text='SUBMIT' id='theButton'>
          SUBMIT
        </button>
        <NavLink to='/'>
          <Button text='CANCEL' />
        </NavLink>
      </BtnGroup>
    </Form>
  );
};

export default ContactForm;
