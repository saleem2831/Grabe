// src/Work.js
import React from 'react';

import './work.css';
import './home.css';
import Footer from '../Footer';




const Work = () => {
    return (
        <main>
          <div className='Intro'>
            <div className='one'>
               <p className='one-1'>
               We bring your boldest ideas to life
                </p>   
            </div>
            </div>
    
          <div className='Tag4'>
              <div className='Tag4-11'>
                  <div className='Tag4-1-1'>
                  </div>
                  <p className='Tag4-1-2'>Case Study
              </p>
              <p id = 'Tag4-1-3' className='Tag4-1-3'>
              Grubstake provides strategic consulting across industries, utilizing data analytics to enhance user experiences.               </p>
              {/* <div className='Tag4-1-4'>
                  <button className='Btn-4'>Strategy</button>
                  <button className='Btn-4'>BusinessConsulting</button>
                  <button className='Btn-4'>Experience</button>
                  <button className='Btn-4'>Health Care</button>
                  <button className='Btn-4'>Cloud</button>
              </div> */}
              </div>
              
              <div className='Tag4-12'>
              <div className='Tag4-2-12'>
              </div>
              <p className='Tag4-2-2'>Case Study
              </p>
              <p className='Tag4-2-3'>
              Innovative solutions, and process optimization aim to create more efficient and customer-centric ecosystems.
              </p>
              {/* <div className='Tag4-2-4'>
                  <button className='Btn-4'>B2B</button>
                  <button className='Btn-4'>BusinessConsulting</button>
                  <button className='Btn-4'>Saas</button>
              </div> */}
              </div>
            </div>
    
          <div className='Tag5'>
          <div className='Tag5-1'>
              </div>
              <p className='Tag5-2'>Case Study
              </p>
              <p className='Tag5-3'>
              Grubstake's expertise in navigating industry landscapes ensures a seamless integration of technology and a forward-looking approach, fostering sustainable growth and success.              </p>
              {/* <div className='Tag4-1-4'>
                  <button className='Btn-4'>Strategy</button>
                  <button className='Btn-4'>BusinessConsulting</button>
                  <button className='Btn-4'>Experience</button>
                  <button className='Btn-4'>Health Care</button>
                  <button className='Btn-4'>Cloud</button>
              </div>          */}
               </div>

               <div className='Tag6'>
              <div className='Tag6-11'>
                  <div className='Tag6-1-1'>
                  </div>
                  <p className='Tag6-1-2'>Case Study
              </p>
              <p className='Tag6-1-3'>
              By combining deep industry knowledge with cutting-edge insights, Grubstake empowers businesses to thrive in dynamic markets, fostering resilience and innovation for long-term success.              </p>
              </div>
              
              <div className='Tag6-12'>
              <div className='Tag6-2-1'>
              </div>
              <p className='Tag6-2-2'>Case Study
              </p>
              <p className='Tag6-2-3'>
              With a commitment to excellence, Grubstake cultivates strategic partnerships and fosters a culture of adaptability, guiding businesses to not only meet current challenges but also anticipate and capitalize on future opportunities.              </p>
            
              </div>
            </div>
            <Footer/>

        </main>
      );};

export default Work;
