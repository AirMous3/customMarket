import { createGlobalStyle } from 'styled-components';

import kanitBoldTtf from '@/assets/fonts/Kanit-Bold.ttf';
import kanitBoldWoff from '@/assets/fonts/Kanit-Bold.woff';
import kanitBoldWoff2 from '@/assets/fonts/Kanit-Bold.woff2';
import kanitRegularTtf from '@/assets/fonts/Kanit-Regular.ttf';
import kanitRegularWoff from '@/assets/fonts/Kanit-Regular.woff';
import kanitRegularWoff2 from '@/assets/fonts/Kanit-Regular.woff2';
import kanitSemiBoldTtf from '@/assets/fonts/Kanit-SemiBold.ttf';
import kanitSemiBoldWoff from '@/assets/fonts/Kanit-SemiBold.woff';
import kanitSemiBoldWoff2 from '@/assets/fonts/Kanit-SemiBold.woff2';

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Kanit', sans-serif;
    src: url(${kanitRegularWoff2}) format('woff2'),
    url(${kanitRegularWoff}) format('woff'),
    url(${kanitRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Kanit', sans-serif;
    src: url(${kanitSemiBoldWoff2}) format('woff2'),
    url(${kanitSemiBoldWoff}) format('woff'),
    url(${kanitSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Kanit', sans-serif;
    src: url(${kanitBoldWoff2}) format('woff2'),
    url(${kanitBoldWoff}) format('woff'),
    url(${kanitBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }


  body {
    font-family: 'Kanit', sans-serif;
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

`;
