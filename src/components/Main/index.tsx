import React from 'react';

import { LatestCustoms } from '@/components/LatestCustoms';
import { PopularCustoms } from '@/components/PopularCustoms';
import { MainSliderCarousel } from '@/components/Slider';

import { MainBestCustom, MainWrapper } from './components';

export const Main = () => {
  return (
    <MainWrapper>
      <MainSliderCarousel />

      <LatestCustoms />

      <PopularCustoms />

      <MainBestCustom>
        <div> BEST CUSTOM OF THE WEEK</div>
      </MainBestCustom>
    </MainWrapper>
  );
};
