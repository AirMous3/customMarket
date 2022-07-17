import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  padding: 50px 15px 50px;

  ${({ theme }) => theme.below.laptopM`
    max-width: 970px;
   `}

  ${({ theme }) => theme.below.laptop`
    max-width: 750px;
   `}

  ${({ theme }) => theme.below.tablet`
    max-width: none;
   `}
`;
