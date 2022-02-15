import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeCarousel.css';
import slide1 from './../../images/s1.png';
import slide2 from './../../images/s2.png';
import slide3 from './../../images/s3.png';
import HomeButton from '../Button/HomeButton';
import Button from 'react-bootstrap/Button';

const HomeCarousel = () => {
  // const nextIcon = `<i class='fa fa-check-square'></i>`;
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        {/* <Carousel.Caption> */}
        {/* <h3>Even after reading for hours do you feel you don't understand a word?</h3> */}
        {/* <p>Even after reading for hours do you feel you don't understand a word?</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        {/* <Carousel.Caption>
          <h3>Do you get worried if you have to attempt questions related to OS?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <a href="/chapters">
            <button className="seehowbtn">
              See How <i className="fa fa-play-circle" aria-hidden="true"></i>
            </button>
          </a>
        </Carousel.Caption>

        {/* <Carousel.Caption>
          <h3>Now get out of this loop and learn OS in a fun way with AcmeOS!!</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
