import React, { useState } from 'react';
import './testinomalslider.css'; // Create this CSS file to style your component

const TextSlider = () => {
  const texts = [
    "Welcome to our website!",
    "Explore our awesome features.",
    "Join our community today."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const goToNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const goToPrev = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  return (
    <div className='testmain'>
      <div className='testmain2'>
          <div className='left-image-main'>
              <div className='left-image'>

              </div>
          </div>
        
              <div className='main-image'>
                
              </div>
          
          <div className='side-image-main'>
              <div className='right-image'>
                
              </div>
          </div>

      </div>
      
    </div>
  );
};

export default TextSlider;
