// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div class="header">
  <a href="/" class="logo">GrubStake</a>
  <div class="header-right">
    <a class="active" href='/work'>Work</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/services">Services</a>
  </div>
</div>
    </header>
  );
};

export default Header;
