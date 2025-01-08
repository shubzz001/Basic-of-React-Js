import React from 'react';
import productsLogo from '../01assets/products.svg';

function Logo() {
  return (
    <div id="logo">
      <img src={productsLogo} alt="Products Logo" />
    </div>
  );
}

export default Logo;
