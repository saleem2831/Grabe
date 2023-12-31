// src/Home.js
import React from 'react';
import './home.css';
import Sliders from './Sliders';
import Header2 from '../header2';
import Footer from '../Footer';
import $ from "jquery";
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import Testinominal from './testinomalslider';
import 'animate.css';





const Home = () => {



    return (
        <main>
          
          <div className='Tag' class="animate__animated animate__bounce">
            <p className='Tag-1' >Grubstake a global business consulting firm</p>
          </div>
          
          <section className='Pic1'>
            <Sliders/>
          </section>

          <div className='Tag2'>
            <p className='Tag2-1'>Based in Hyderabad, we strengthen brands through exceptional digital experiences for companies worldwide.</p>
          </div>

    
          <div className='testinomal'>
            {/* <h1>I Love React</h1> */}
            <Testinominal/>
          </div>

          <div className='Tag3'>
            <p className='Tag3-1'>Sneak peak ...</p>
          </div>

    
            <div className='Tag4'>
              <div className='Tag4-11'>
                  <div className='Tag4-1-1'>
                  </div>
                  <p className='Tag4-1-20'>Case Study
              </p>
              <p id='Tag4-1-3' className='Tag4-1-3 '>
              Grubstake provides strategic consulting across industries, utilizing data analytics to enhance user experiences.               </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Strategy</button>
                  <button className='Btn-4'>BusinessConsulting</button>
                  <button className='Btn-4'>Experience</button>
                  <button className='Btn-4'>Health Care</button>
                  <button className='Btn-4'>Cloud</button>
              </div>
              </div>
              
              <div className='Tag4-12'>
              <div className='Tag4-2-12'>
              </div>
              <p className='Tag4-2-2'>Case Study
              </p>
              <p className='Tag4-2-3'>
              Innovative solutions, and process optimization aim to create more efficient and customer-centric ecosystems              </p>
              <div className='Tag4-2-4'>
                  <button className='Btn-4'>B2B</button>
                  <button className='Btn-4'>BusinessConsulting</button>
                  <button className='Btn-4'>Saas</button>
              </div>
              </div>
            </div>
    
          <div className='Tag5'>
          <div className='Tag5-1'>
              </div>
              <p className='Tag5-2'>Case Study
              </p>
              <p className='Tag5-3'>
              Grubstake's expertise in navigating industry landscapes ensures a seamless integration of technology and a forward-looking approach, fostering sustainable growth and success              </p>
              <div className='Tag4-1-4'>
                  <button className='Btn-4'>Strategy</button>
                  <button className='Btn-4'>BusinessConsulting</button>
                  <button className='Btn-4'>Experience</button>
                  <button className='Btn-4'>Health Care</button>
                  <button className='Btn-4'>Cloud</button>
              </div>         
               </div>
               <Footer/>
        </main>
      );};

export default Home;
