import styled from 'styled-components';

const Title = styled.h1``;

const PageTitle = (props) => {
  return <Title>{props.title}</Title>;
};

export default PageTitle;
