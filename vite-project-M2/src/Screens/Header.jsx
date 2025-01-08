import React from 'react';
import './css/header.css';
import Logo from '../02components/Logo';
import MenuBar from '../02components/MenuBar';
import SearchBar from '../02components/SearchBar';
import LastLogo from '../02components/LastLogo';

function Header() {
  return (
    <div id="navbar">
      <Logo />
      {/* <SearchBar /> */}
      <MenuBar />
      <LastLogo />
    </div>
  );
}

export default Header;
