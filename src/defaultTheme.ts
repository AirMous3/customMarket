import { css } from 'styled-components';

const SCREEN_SIZES: { [key: string]: number } = {
  mobileM: 568,
  mobileL: 640,
  tablet: 768,
  laptop: 992,
  laptopM: 1200,
} as const;

const above = Object.keys(SCREEN_SIZES).reduce(
  (acc: { [key: string]: (...args: any) => any }, key) => {
    acc[key] = (...args: any) => css`
      @media (min-width: ${SCREEN_SIZES[key]}px) {
        ${css(...(args as [any]))}
      }
    `;
    return acc;
  },
  {},
);

const below = Object.keys(SCREEN_SIZES).reduce(
  (acc: { [key: string]: (...args: any) => any }, key) => {
    acc[key] = (...args: any) => css`
      @media (max-width: ${SCREEN_SIZES[key]}px) {
        ${css(...(args as [any]))}
      }
    `;
    return acc;
  },
  {},
);

export const theme = {
  colors: {
    darkRed: '#cd0000',
    border: 'rgb(235, 234, 242)',
  },
  boxShadows: ['rgb(17 17 49 / 12%) 6px 6px 16px'],
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '20px', // 2
    '40px', // 3
    '56px', // 4
    '65px', // 5
  ],
  above,
  below,
};
