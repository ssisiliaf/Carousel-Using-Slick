import React, { Component } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
            <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
            </div>
            <div>
            <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
            </div>
            <div>
            <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
            </div>
            <div>
            <img src="https://via.placeholder.com/300x200" alt="Slide 4" />
            </div>
            <div>
            <img src="https://via.placeholder.com/300x200" alt="Slide 5" />
            </div>
        </Slider>
    );
  }
}

export default Carousel;