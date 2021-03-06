import React from 'react';

import './styles/navbar.css';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <a href="/" className="navbar__brand">
            <img className="navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-light">Platzy</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;