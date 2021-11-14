import React from 'react';
import { Carousel } from 'react-bootstrap';
import watch01 from '../../../images/w001.jpg'
import watch02 from '../../../images/w002.jpg'
import watch03 from '../../../images/w003.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={watch01}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={watch02}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={watch03}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;