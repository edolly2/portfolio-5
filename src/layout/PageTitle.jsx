import styled from 'styled-components';

const Title = styled.h1`
  padding: 1.6rem 0;
`;

const PageTitle = (props) => {
  return (
    <Title>
      <span className='primary'>&lt;</span>{' '}
      <span className='secondary'>{props.title}</span>{' '}
      <span className='primary'>/&gt;</span>
    </Title>
  );
};

export default PageTitle;
