import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Routes, Route, NavLink } from 'react-router-dom';
import SubmitModal from './SubmitModal';

const Form = styled.form`
  /* padding: 1.6rem; */
  padding: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.6);
  backdrop-filter: blur(5px);
  /* width: 75%; */
  max-width: 80rem;
  margin: 0 auto;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
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

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
  }
`;

const Label = styled.label`
  color: #5c98d9;
  display: flex;
  /* line-height: center; */
  /* align-self: flex-start; */
`;

const Input = styled.input`
  padding: 0.4rem;
  border: 0px solid transparent;
  /* height: 27px; */
  color: rgb(57, 15, 61);
  /* &:focus {
    border: 2px solid #5c98d9;
  } */
`;

const Option = styled.option`
  padding: 0.4rem;
  color: rgb(57, 15, 61);
`;

const Select = styled.select`
  padding: 0.4rem;
  color: rgb(134, 134, 134);
  /* height: 25px; */
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
  gap: 1.6rem;

  @media screen and (min-width: 360px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 1.6rem;
  }
`;

const Transparent = styled.div`
  color: transparent;
`;

const Error = styled.div`
  color: red;
`;

const ContactForm = () => {
  const [formValid, setFormValid] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [referrerValue, setReferrerValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log([...formData.entries()]);
    setFormValid(!formValid);
  }

  return (
    <>
      <Form method='post' onSubmit={handleSubmit}>
        <FormHeader>
          <span className='primary'>{'//'}</span> I Would Love to Hear From You
        </FormHeader>
        <FormGroup>
          <FormControl>
            <Label htmlFor='name'>NAME</Label>
            <Input
              id='name'
              type='text'
              name='name'
              value={nameValue}
              defaultValue=''
              onChange={(e) => {
                setNameValue(e.target.value);
                console.log(nameValue);
              }}
              placeholder='Full Name'
              // required
            />
            {/* {errors.name && <span>{errors.name}</span>} */}
          </FormControl>
          <FormControl>
            <Label htmlFor='email'>EMAIL</Label>
            <Input
              id='email'
              type='email'
              name='email'
              value={emailValue}
              defaultValue=''
              onChange={(e) => {
                setEmailValue(e.target.value);
                console.log(e.target.value);
              }}
              placeholder='Example@email.com'
              // required
            />
            {/* {errors.email && <span>{errors.email}</span>} */}
          </FormControl>
        </FormGroup>
        <FormGroup style={{ marginTop: '1.6rem' }}>
          <FormControl
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <Label htmlFor='referrer'>THIS IS IN REFERENCE TO</Label>
            {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
            <Select
              name='referrer'
              id='referrer'
              defaultValue='default'
              style={{ backgroundColor: 'rgb(255, 255, 255)' }}
            >
              <Option
                name='referrer'
                value='default'
                selected
                disabled
                style={{
                  color: '#868686',
                  textAlign: 'center',
                  display: 'none',

                  // position: 'absolute',
                  // zIndex: '-100',
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
            {/* </div> */}
          </FormControl>
        </FormGroup>
        <TextAreaWrapper>
          <Label htmlFor='message'>YOUR THOUGHTS</Label>
          <TextArea
            id='message'
            rows={10}
            placeholder='Thank you for showing interest in my portfolio.'
            name='message'
            onChange={(e) => {
              setMessageValue(e.target.value);
              console.log(e.target.value);
            }}
            value={messageValue}
            defaultValue=''
          />
          {/* {errors.message && <span>{errors.message}</span>} */}
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
      <SubmitModal
        senderName={nameValue}
        onClick={() => {
          // FIX
          setFormValid(false);
        }}
        style={{ display: formValid ? 'flex' : 'none' }}
      />
    </>
  );
};

export default ContactForm;
