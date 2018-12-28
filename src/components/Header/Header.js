import React, { Component } from 'react';
import header from './../../img/header.png';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      
      <div className="App">
          <img src={header} className="header" alt="header" />
      </div>
    );
  }
}

export default Header;
