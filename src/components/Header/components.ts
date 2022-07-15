import styled from 'styled-components';

export const HeaderInput = styled.input`
  margin-left: 20px;
  height: fit-content;
  min-width: 300px;
  outline: none;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const HeaderUl = styled.ul`
  display: flex;
  gap: 40px;
  li {
    font-weight: 600;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  color: red;
`;
