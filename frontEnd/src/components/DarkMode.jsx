import { useState } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const DarkMode = () => {
  const [darkModeActive, setDarkModeActive] = useState(true);
  // var root = document.getElementsByTagName('html')[0];
  return darkModeActive ? (
    <FaRegMoon
      className='dark-mode-icon'
      onClick={() => {
        setDarkModeActive(false);
        console.log(darkModeActive);
      }}
    />
  ) : (
    <FaRegSun
      className='dark-mode-icon'
      onClick={() => {
        setDarkModeActive(true);
        console.log(darkModeActive);
      }}
    />
  );
};

export default DarkMode;
