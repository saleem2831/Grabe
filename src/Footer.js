import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* <div className="column">
        <h2>GrubStake</h2>
        <p>Email</p>
        <p>Address Line</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="column">
        <h3>Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
        </ul>
      </div> */}
      <div className='main2'>
        <div className='txt'>
          <div className='name'>
            <p className='txt-10'>Let’s Talk</p>
            <p className='txt2'>sales@grubstake.com</p>
          </div>
          <p className='txt3'>10-3-299/2, Humayun Nagar, Masab Tank, Hyderabad - 500028</p>

        </div>
        <ul>
          <ul id="foot">Work</ul>
          <ul id="foot">Industries</ul>
          <ul id="foot">Clients</ul>
          <ul id="foot">About</ul>
          <ul id="foot">Contact</ul>
        </ul>
      </div>

      <div className='bottom'>
        <p className='bot1'>Privacy    &nbsp;  &nbsp;&nbsp; &nbsp;Terms &nbsp;&nbsp; &nbsp;&nbsp;Sitemap</p>
        {/* <p className='bot1'>Privacy</p> */}
        <p className='bot1'> copyrights 2023 - Grubstake</p>
      </div>
    </footer>
    
  );
};

export default Footer;
