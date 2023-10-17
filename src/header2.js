import React from 'react';
import { StickyNav } from 'react-js-stickynav';
import 'react-js-stickynav/dist/index.css';
import './Header.css';

const Header2 = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
        //   padding: 20px;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
    <div>
      {style()}
      <StickyNav>
      <header>
        <div class="header">
  {/* <a href="/" class="logo">GrubStake</a> */}
  <a href="/" class="logo"><div className='img11'></div></a>
  <div class="header-right">
    <a class="active" className='Color' href='/work'>Work</a>
    <a className='Color' href="/about">About</a>
    <a className='Color' href="/contact">Contact</a>
    <a className='Color' href="/services">Services</a>
  </div>
</div>
    </header>
      </StickyNav>

      <div className='styl'>
        
      </div>
    </div>
  )
}

export default Header2;