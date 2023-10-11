// src/Work.js
import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './service.css';

const Services = () => {

      return (
        <main>
          <div className='Box1'>
            <div className='Box1-1'>
              <p className='Box1-1-1'>A full-service digital <br/> innovation partner</p>
              <p className='Box1-1-2'>Our rich technology and design expertise delivers top brands and <br/> digital experiences.</p>
            </div>

          </div>
    
          <div className='Tag4'>
              <div className='Tag4-11'>
                  {/* <div className='Tag4-1-1'>
                  </div> */}
                  <p className='Tag4-1-2'>Digital & Business Transformation</p>
              <p className='Tag4-1-3'>
              At GrubStake, we believe everyone deserves an exceptional product experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.
              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Data & Analytics</button>
                  <button className='Btn-4'>Modernizing Core Technology</button>
                  <button className='Btn-4'>Modernizing Core Technology</button>
                  <button className='Btn-4'>Enterprise Technology</button>
                  <button className='Btn-4'>Automation</button>
                  <button className='Btn-4'>Change Management</button>
                  <button className='Btn-4'>Restructuring</button>
              </div>
              </div>
              
              <div className='Tag4-13'>
              <div className='Tag4-2-1'>
              </div>
            
              </div>
            </div>
    
           
              

            <div className='Tag'>
           <div className='Tag4-13'>
              <div className='Tag1-2-1'>
              </div>
              </div>

              <div className='Tag4-11'>
                  
                  <p className='Tag4-1-2'>Growth by design</p>
              <p className='Tag4-1-3'>
              Our designers and developers collaborate to create products and digital workflows that provide exceptional user experiences and functionality. We optimise search engine visibility, ensure accessibility, and maximise performance.
              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Customer Experience</button>
                  <button className='Btn-4'>Customer Episode/Journey Design</button>
                  <button className='Btn-4'>Product Design</button>
                  <button className='Btn-4'>Service Design</button>
                  <button className='Btn-4'>Create NPS (Net Promoter System)</button>
                  
              </div>
              </div>
              
              
            </div>
    
          <section className='footer'>
            <h1>Let's end the application with this Footer</h1>
          </section>
        </main>
      );
};

export default Services;
