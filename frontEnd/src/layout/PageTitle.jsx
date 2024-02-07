const PageTitle = (props) => {
  return (
    <h1 className='page-title'>
      <span className='primary'>&lt;</span>{' '}
      <span className='secondary'>{props.title}</span>{' '}
      <span className='primary'>/&gt;</span>
    </h1>
  );
};

export default PageTitle;
