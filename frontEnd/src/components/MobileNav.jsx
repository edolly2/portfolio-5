import { CgMenuGridO } from 'react-icons/cg';

const MobileNav = (props) => {
  return (
    <div className='nav-container'>
      {/* <DarkMode /> */}
      <CgMenuGridO className='icon menu-icon' onClick={props.onMenuClick} />
    </div>
  );
};

export default MobileNav;
