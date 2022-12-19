import styled from 'styled-components';

const Title = styled.h1`
  padding: 1.6rem 0;
`;

const PageTitle = (props) => {
  return (
    <Title>
      <span className='purple'>&lt;</span>{' '}
      <span className='white'>{props.title}</span>{' '}
      <span className='purple'>/&gt;</span>
    </Title>
  );
};

export default PageTitle;
