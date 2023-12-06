import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.from(textRef.current, { opacity: 0, y: 100, duration: 1 });

    // You can add more animations or tweens as needed

    return () => {
      tl.kill(); // Kill the animation on component unmount
    };
  }, []);

  return (
    <div>
      <div style={{ height: '100vh' }}>
        {/* Add some content or leave it empty */}
        <p>ki hal chal</p>
      </div>
      <div
        ref={textRef}
        style={{
          textAlign: 'center',
          padding: '50px',
          fontSize: '24px',
          background: '#f0f0f0',
        }}
      >
        <p>hello world</p>
        {/* Add more text or content as needed */}
      </div>
      <div style={{ height: '200vh' }}>
        {/* Add more content to allow for scrolling */}
      </div>
    </div>
  );
};

export default ScrollAnimation;
