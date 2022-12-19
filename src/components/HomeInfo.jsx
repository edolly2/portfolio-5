import styled from 'styled-components';

const Container = styled.div`
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
`;

const HomeInfo = () => {
  return (
    <Container>
      <h2>
        <span className='purple'>//</span>{' '}
        <span className='white'>Web Developer</span>
      </h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        nihil vel labore dolorem qui pariatur enim consequatur itaque iste,
        recusandae minima aut cum repudiandae! Recusandae enim assumenda iste
        eveniet necessitatibus voluptate numquam, nesciunt cum, ipsum beatae
        minus voluptatibus voluptates, nobis officia nisi facere aperiam
        molestias.
      </p>
    </Container>
  );
};

export default HomeInfo;
