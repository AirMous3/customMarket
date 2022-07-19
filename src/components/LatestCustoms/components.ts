import styled from 'styled-components';

export const LatestCustomsContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  a {
    width: 25%;
    height: 300px;
  }
`;

export const LatestCustom = styled.div<any>`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
