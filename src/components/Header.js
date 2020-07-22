import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="//logo.clearbit.com/dji.com" alt="logo"></img>
        </div>
        <ul>
          <li className="navItem">
            <a href="#">Products</a>
          </li>
          <li className="navItem">
            <a href="#">Advantage</a>
          </li>
          <li className="navItem">
            <a href="#">Our Story</a>
          </li>
          <li className="navItem">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
