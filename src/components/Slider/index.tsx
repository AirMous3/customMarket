import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {
  SlideCategoryWrapper,
  SlideImage,
  SlideWrapper,
  SliderContainer,
} from './components';

export const MainSliderCarousel = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <SlideWrapper>
          <SlideCategoryWrapper>
            <div>CATEGORIES</div>
            <div>NAME: GUCCI</div>
            <button>buy now</button>
          </SlideCategoryWrapper>
          <SlideImage>IMAGE</SlideImage>
        </SlideWrapper>

        <SlideWrapper>
          <SlideCategoryWrapper>
            <div>CATEGORIES</div>
            <div>NAME: GUCCI</div>
            <button>buy now</button>
          </SlideCategoryWrapper>
          <SlideImage>IMAGE</SlideImage>
        </SlideWrapper>
      </Slider>
    </SliderContainer>
  );
};
