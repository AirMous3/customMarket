import styled from 'styled-components';

export const PopularCustomsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;

  a {
    width: 33.33%;
    height: 500px;
  }
`;
export const PopularCustom = styled.div<any>`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
