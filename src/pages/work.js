// src/Work.js
import React from 'react';

import './work.css';


const Work = () => {
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
          <section class="callout">
  <img src="https://www.osprey.com/images/heros/19_Backpacking_Carousel.jpg" alt="callout"/>
</section>
       
        </main>
      );};

export default Work;
