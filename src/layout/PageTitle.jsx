import styled from 'styled-components';

const Title = styled.h1`
  padding: 1.6rem 0;
`;

const PageTitle = (props) => {
  return <Title>&lt;{props.title}/&gt;</Title>;
};

export default PageTitle;
