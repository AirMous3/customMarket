import styled from 'styled-components';

import image from '@/assets/bestCustomWeek/custom_shoes.webp';

export const BestCustomWeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  a {
    height: 475px;
    width: 60%;
  }
`;

export const BestCustomWeekImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
