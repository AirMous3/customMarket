import styled from 'styled-components';

import left from '@/assets/leftArrow.svg';
import right from '@/assets/rightArrow.svg';

export const SlideCategoryWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-transform: uppercase;
`;

export const SlideCategoryTitle = styled.h3``;

export const SlideCategorySubTitle = styled.div``;

export const SlideButton = styled.button`
  border: 1px solid #e1e1e1;
  padding: 12px 16px;
  min-width: 150px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SlideImage = styled.div<any>`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 475px;
  width: 60%;
`;

export const SlideWrapper = styled.div`
  display: flex !important;
`;

export const SliderContainer = styled.div`
  width: 100%;

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }

  .slick-next:before {
    content: url(${right});
    color: black;
  }

  .slick-prev:before {
    content: url(${left});
    color: black;
  }
`;
