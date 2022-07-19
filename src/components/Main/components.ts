import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
