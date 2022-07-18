import styled from 'styled-components';

import left from '@/assets/left.svg';
import right from '@/assets/right.svg';

export const SlideCategoryWrapper = styled.div`
  background: blueviolet;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const SlideImage = styled.div`
  background: red;
  height: 475px;
  width: 60%;
`;
export const SlideWrapper = styled.div`
  display: flex !important;
`;
export const SliderContainer = styled.div`
  width: 100%;

  .slick-next:before {
    content: url(${right});
    color: black;
  }

  .slick-prev:before {
    content: url(${left});
    color: black;
  }
`;
