// src/Work.js
import React from 'react';
import '../pages/contact.css';

const Contact = () => {

  
    return (
        <main>
        <div className='main1'>
          <div className='main2'>
            <div className='main2-1'>
              <p className='main2-1-1'>Let’s Talk </p>
              <p className='main2-1-2'>We'd love to learn more about you and what we can design and build together.</p>

              <div className='main2-2'>
                {/* <div className='main2-2-1'> */}
                <div>
                  <p className='main2-2-1-1'>Become a client</p>
                  {/* <p className='main2-2-1-2'>sales@grubstake.com</p> */}
                  <p className='main2-2-1-2'><a className='ref' href="mailto:sales@grubstake.com">sales@grubstake.com</a></p>
                </div>
                <div className='main2-2-2'>
                <p className='main2-2-1-1'>Work at GrubStake</p>
                  {/* <p className='main2-2-1-2'>jobs@grubstake.com</p> */}
                  <p className='main2-2-1-2'><a className='ref' href="mailto:jobs@grubstake.com">jobs@grubstake.com</a></p>
                  </div>
            </div>
            <p className='address'>10-3-299/2, Humayun Nagar, Masab Tank, Hyderabad - 500028</p>
            <a className='icon-1' href="https://www.youtube.com/">
            <a className='icon-2' href="https://twitter.com/">
            <a className='icon-3' href="https://www.linkedin.com/">
            </a>
            </a>
            </a>
            
            </div>            
            <div className='img-div'><div className='img'></div> </div>
          </div>
          <div className='img-div2'><div className='img2'></div> </div>
          <div className='foot'>
          <p className='foottxt'>Privacy</p>
          <p className='foottxt'>Terms</p>
          <p className='foottxt'>Sitemap</p>
          <p className='foottxt2'>copyrights 2023 - Grubstake</p>

          </div>
        </div>   
        </main>
      );};

export default Contact;
