import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
function MenuBar() {
  return (
    <div id="menu-bar">

<ul>
        <li><a href="#CONTACnhT">What we do<FaAngleDown  style={{fontSize:15, marginLeft:8}}/>
        </a></li>
        <li><a href="#WORLDWIDE">Who we are<FaAngleDown  style={{fontSize:15, marginLeft:8}}/>
        </a></li>
           <li><a href="#WORLDWIDE">Insight<FaAngleDown  style={{fontSize:15, marginLeft:8}}/>
        </a></li>
           <li><a href="#WORLDWIDE">Careers<FaAngleDown  style={{fontSize:15, marginLeft:8}}/>
        </a></li>
          <li><a href="#WORLDWIDE">Newsroom<FaAngleDown  style={{fontSize:15, marginLeft:8}}/>
        </a></li>
         <li><a href="#WORLDWIDE">Investors<FaAngleDown  style={{fontSize:15, marginLeft:8}}/>
        </a></li>
        {/* <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li> */}
      </ul>
      <ul>
        <li><a href="#CONTACT">CONTACT US</a></li>
        <li><a href="#WORLDWIDE">TCS WORLDWIDE</a></li>
       
      </ul>
    </div>
  );
}

export default MenuBar;
