import React from "react";
import TATALogo from "../01assets/tata-logo-1.svg";
import { IoSearchOutline } from "react-icons/io5";


function LastLogo() {
  return (
    <div id="lastLogo">
      <div></div>
      <IoSearchOutline  style={{color:'white', paddingRight:40, fontSize: 24}}/>
      <img src={TATALogo} alt="Products Logo" />
    </div>
  );
}

export default LastLogo;
