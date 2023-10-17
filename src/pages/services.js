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
           <div className='Tag1-13'>
              <div className='Tag1-2-1'>
              </div>
              </div>

              <div className='Tag1-11'>
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

            <div className='Tag4'>
              <div className='Tag4-11'>
                  {/* <div className='Tag4-1-1'>
                  </div> */}
                  <p className='Tag4-1-2'>Strategy & Corporate Finance</p>
              <p className='Tag4-1-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Data & Business Unit Strategy</button>
                  <button className='Btn-4'>Mergers & Acquisitions</button>
                  <button className='Btn-4'>Private Equity</button>
                  <button className='Btn-4'>Risk Management</button>
                  <button className='Btn-4'>Finance function excellence</button>
                  <button className='Btn-4'>Compliance & Due Diligence</button>
              </div>
              </div>
              
              <div className='Tag4-13'>
              <div className='Tag4-2-1'>
              </div>
              </div>

            </div>
    
            <div className='Tag'>
           <div className='Tag1-13'>
              <div className='Tag1-2-1'>
              </div>
              </div>

              <div className='Tag1-11'>
                  <p className='Tag4-1-2'>Operations & Implementation</p>
              <p className='Tag4-1-3'>
              Our designers and developers collaborate to create products and digital workflows that provide exceptional user experiences and functionality. We optimise search engine visibility, ensure accessibility, and maximise performance.
              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Reduce Costs</button>
                  <button className='Btn-4'>Service Operations</button>
                  <button className='Btn-4'>Capital Project Management</button>
                  <button className='Btn-4'>Product Development & procurement</button>
                  <button className='Btn-4'>Manufacturing & Supply chain Management</button>
                  <button className='Btn-4'>Operating Models</button>
                  
              </div>
              </div> 
            </div>

            <div className='Tag4'>
              <div className='Tag4-11'>
                  {/* <div className='Tag4-1-1'>
                  </div> */}
                  <p className='Tag4-1-2'>People & Organization Strategy</p>
              <p className='Tag4-1-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Employee Engagement</button>
                  <button className='Btn-4'>Leadership Development</button>
                  <button className='Btn-4'>Talent</button>
                  <button className='Btn-4'>Organization Design</button>
                  <button className='Btn-4'>Culture & Behavior change</button>
              </div>
              </div>
              
              <div className='Tag4-13'>
              <div className='Tag4-2-1'>
              </div>
              </div>

            </div>
    
            <div className='Tag'>
           <div className='Tag1-13'>
              <div className='Tag1-2-1'>
              </div>
              </div>

              <div className='Tag1-11'>
                  <p className='Tag4-1-2'>Innovation Strategy</p>
              <p className='Tag4-1-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Employee Engagement</button>
                  <button className='Btn-4'>Leadership Development</button>
                  <button className='Btn-4'>CX Transformation</button>
                  <button className='Btn-4'>Corporate Venturing</button>
                  <button className='Btn-4'>Business Model Innovation</button>
                  <button className='Btn-4'>Innovation by Design (Product / Service)</button>
                  
              </div>
              </div> 
            </div>

            <div className='Tag4'>
              <div className='Tag4-11'>
                  {/* <div className='Tag4-1-1'>
                  </div> */}
                  <p className='Tag4-1-2'>Growth, Marketing & Sales</p>
              <p className='Tag4-1-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Branding</button>
                  <button className='Btn-4'>Sales & Ecosystem Management</button>
                  <button className='Btn-4'>Portfolio Management</button>
                  <button className='Btn-4'>Customer Life-cycle Management</button>
                  <button className='Btn-4'>Pricing Optimization</button>
                  <button className='Btn-4'>Marketing ROI</button>
              </div>
              </div>
              
              <div className='Tag4-13'>
              <div className='Tag4-2-1'>
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
