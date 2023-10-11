// src/Work.js
import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './service.css';

const Services = () => {

      return (
        <main>
          <section className='intro'>
            <h1>This is the Introduction section</h1>
          </section>
    
          <section className='contents'>
            <h1>I Love React</h1>
          </section>
    
            <section id="stick">
              <h1>
                Hey I'm Sticky
              </h1>
              <p>other contents</p>
              <p>other contents</p>
              <p>other contents</p>
              <p>other contents</p>
              <p>other contents</p>
              <p>other contents</p>
            </section>
    
          <section className='footer'>
            <h1>Let's end the application with this Footer</h1>
          </section>
        </main>
      );
};

export default Services;
