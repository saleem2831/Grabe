import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import '../pages/sliders.css';
import Carousel from 'react-bootstrap/Carousel'; 
import Image1 from '../Images/image 10.png';
import Image2 from '../Images/image 8.png';
import Image3 from '../Images/Property 1=hero3.png';



const Sliders = () => {
  return (
    <div className='Slidemain'>
    <Carousel fade>
      <Carousel.Item style={{color:'red'}}>
      <img className="d-block w-100 Img" src={Image1} alt="Image Two"/>       
  <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Image2} alt="Image Two"/>       

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Image3} alt="Image Two"/>       
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Sliders;