import React from 'react';
import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const MainSlider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const MainImage = styled.div`
  background: red;
  height: 475px;
  width: 60%;
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
export const MainSliderWrapper = styled.div`
  background: blueviolet;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Main = () => {
  return (
    <MainWrapper>
      <MainSlider>
        <MainSliderWrapper>
          <div>CATEGORIES</div>
          <div>NAME: GUCCI</div>
          <button>buy now</button>
        </MainSliderWrapper>
        <MainImage>IMAGE</MainImage>
      </MainSlider>

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
