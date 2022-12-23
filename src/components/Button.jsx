import styled from 'styled-components';

const Btn = styled.button`
  padding: 0.8rem;
  border-radius: 0.8rem;
  width: 12rem;
  height: 3.2rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #5c98d9;
  border: 2px solid #5c98d9;
  /* margin: 2.4rem 0; */
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #5c98d9;
    color: white;
  }
`;

const Button = ({ color, text }) => {
  return <Btn className={`${color}`}>{text}</Btn>;
};

export default Button;
