import React from 'react';
import styled from 'styled-components';

import { MainSliderCarousel } from '@/components/Slider';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const MainLatestCustoms = styled.ul`
  display: flex;
  gap: 15px;
  width: 100%;

  li {
    background: chartreuse;
    width: 25%;
    height: 200px;
  }
`;
export const MainPopularCustoms = styled.ul`
  display: flex;
  width: 100%;
  gap: 15px;

  li {
    background: blue;
    width: 33.33%;
    height: 200px;
  }
`;
export const MainBestCustom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    background: aqua;
    height: 475px;
    width: 60%;
  }
`;

export const Main = () => {
  return (
    <MainWrapper>

      <MainSliderCarousel />

      <MainLatestCustoms>
        <li> LATEST CUSTOMS</li>
        <li> LATEST CUSTOMS</li>
        <li> LATEST CUSTOMS</li>
        <li> LATEST CUSTOMS</li>
      </MainLatestCustoms>

      <MainPopularCustoms>
        <li>POPULAR CUSTOMS</li>
        <li>POPULAR CUSTOMS</li>
        <li>POPULAR CUSTOMS</li>
      </MainPopularCustoms>
      <MainBestCustom>
        <div> BEST CUSTOM OF THE WEEK</div>
      </MainBestCustom>
    </MainWrapper>
  );
};
