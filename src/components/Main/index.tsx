import React from 'react';

import { BestCustomWeek } from '@/components/BestCustomWeek';
import { LatestCustoms } from '@/components/LatestCustoms';
import { PopularCustoms } from '@/components/PopularCustoms';
import { MainSliderCarousel } from '@/components/Slider';

import {  MainWrapper } from './components';

export const Main = () => {
  return (
    <MainWrapper>
      <MainSliderCarousel />

      <LatestCustoms />

      <PopularCustoms />

      <BestCustomWeek />

    </MainWrapper>
  );
};
