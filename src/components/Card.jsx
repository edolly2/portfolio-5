import React from 'react';
import styled from 'styled-components';
import Headshot from '../assets/me-headshot.png';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';
import Button from './Button';

const CardWrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(119, 119, 119, 0.5);
  border-radius: 0.8rem;
  padding: 2.4rem;
  align-items: center;
  gap: 2.4rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  background-color: rgba(119, 119, 119, 0.3);
  backdrop-filter: blur(5px);
  /* z-index: 1; */
  @media screen and (min-width: 426px) {
    max-width: 40rem;
  }
`;

const CardImg = styled.img`
  /* width: 18.4rem;  */
  max-width: 12.8rem;
  height: auto;
  background-color: rgba(119, 119, 119, 0.7);
  border-radius: 50%;
`;

const CardSocialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(119, 119, 119, 0.5);
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const Card = () => {
  return (
    <CardWrapper>
      <CardImg src={Headshot} alt='Full Stack Developer, Eric Dollinger' />
      <Line />
      <CardSocialWrapper>
        <FaGithub className='icon' />
        <FaLinkedinIn className='icon' />
        <FaFacebook className='icon' />
        <FaTwitter className='icon' />
      </CardSocialWrapper>
      <BtnGroup>
        <Button text='Explore' />
        <Button text='Contact' />
      </BtnGroup>
    </CardWrapper>
  );
};

export default Card;
