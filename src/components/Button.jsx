import styled from 'styled-components';

const Btn = styled.button`
  padding: 0.8rem;
  border-radius: 0.8rem;
  width: 12rem;
  height: 3.2rem;
  /* margin: 2.4rem 0; */
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Button = ({ color, text }) => {
  return <Btn className={`${color}`}>{text}</Btn>;
};

export default Button;
