import React from 'react';

import { LatestCustoms } from '@/components/LatestCustoms';
import { MainSliderCarousel } from '@/components/Slider';

import { MainBestCustom, MainPopularCustoms, MainWrapper } from './components';

export const Main = () => {
  return (
    <MainWrapper>
      <MainSliderCarousel />

      <LatestCustoms />

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
