import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { sliderConfig } from '@/components/Slider/config';

import {
  SlideButton,
  SlideCategorySubTitle,
  SlideCategoryTitle,
  SlideCategoryWrapper,
  SlideImage,
  SlideWrapper,
  SliderContainer,
} from './components';
import { SlidePropsType } from './types';

const Slide = ({ subtitle, title, image, path }: SlidePropsType) => {
  console.log(image)
  return (
    <SlideWrapper>
      <SlideCategoryWrapper>
        <SlideCategorySubTitle>{subtitle}</SlideCategorySubTitle>
        <SlideCategoryTitle>{title}</SlideCategoryTitle>
        <a href={path}>
          <SlideButton>shop now</SlideButton>
        </a>
      </SlideCategoryWrapper>
      <SlideImage image={image} />
    </SlideWrapper>
  );
};

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
        {sliderConfig.map(({ path, subtitle, title, image }, index) => (
          <Slide
            key={index}
            subtitle={subtitle}
            title={title}
            image={image}
            path={path}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};
