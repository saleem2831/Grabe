import React, { useState } from 'react';
import './testinomalslider.css'; // Create this CSS file to style your component

const TextSlider = () => {
  const texts = [
    {head: 'Hello 1st Text', para:"Welcome to our website!"},
    {head: 'Hello 2nd Text', para:"Explore our awesome features."},
    {head: 'Hello 3rd Text', para:"Join our community today."},
    {head: 'Hello 4th Text', para:"Join our community today."},
  ];

  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const goToNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const goToPrev = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  const prevSlide = (currentTextIndex - 1 + texts.length) % texts.length;
  const nextSlide = (currentTextIndex + 1 + texts.length) % texts.length;



  return (
    
    <>
    <div className='main-frame'>
      <div className='mid-frame'>
          {/* <h1>Hello World</h1> */}
          {/* <button className='prev blue' onClick={goToPrev}>Prev</button> */}
          <button className='prev blue' onClick={goToPrev}></button>
          <div className='left-img-bg'>
             <div className='left-img'>
               {/* <h1>{texts[currentTextIndex].head}</h1>
               <p>{texts[currentTextIndex].para}</p> */}
               <p className='head-txt'>{texts[prevSlide].head}</p>

             </div>
          </div>
          <div className='main-img'>
          <p className='main-head-text'>{texts[currentTextIndex].head}</p>
          <p className='main-para-text'>{texts[currentTextIndex].para}</p>
          <button className="learn-more">Learn More</button>          
          </div>
          <div className='right-img-bg'>
          <div className='right-img'>
          <p className='head-txt'>{texts[nextSlide].head}</p>
          </div>
          </div>
          {/* <div className="buttons"> */}
          {/* <button className='next blue' onClick={goToNext}>Next</button> */}
          <button className='next blue' onClick={goToNext}></button>

        {/* </div> */}
      </div>

    </div>
    </>
  );
};

export default TextSlider;
