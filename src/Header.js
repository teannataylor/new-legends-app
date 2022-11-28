import React from "react";
import {
  NavLink
} from "react-router-dom";



function Header() {
  const link = {
    width: '80px',
    padding: '12px',
    margin: '0 3px 3px',
    background: 'lightcoral',
    textDecoration: 'none',
    color: 'white'
  }
  return (
    <header className='button-header'>
      <h1>
        Apex Legends Database
      </h1>
      <NavLink to="/legends" style={link}>HOME</NavLink>
      <NavLink to="/about" style={link}>ABOUT</NavLink>
    </header>
  );
}

export default Header;