

import React, { useState } from 'react';

const SwitchisLogged = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggle = () => setIsLoggedIn(!isLoggedIn);

  let button;
  switch (isLoggedIn) {
    case true:
      button = (
        <button className="btn btn-warning" onClick={handleToggle}>
          Logout
        </button>
      );
      break;
    case false:
      button = (
        <button className="btn btn-warning" onClick={handleToggle}>
          Login
        </button>
      );
      break;
    default:
      button = null;
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">
          MyApp
        </a>

        {/* Collapsible Content */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navbar Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
          </ul>

          {/* Right-aligned Button */}
          <div>{button}</div>
        </div>
      </div>
    </nav>
    <><div><h1>Switch case</h1></div></>
    </>
  );
};

export default SwitchisLogged;
