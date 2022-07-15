import styled from 'styled-components';

import loop from '@/assets/loop.svg';

export const HeaderInput = styled.input`
  margin-left: 20px;
  min-width: 300px;
  height: 25px;
  outline: none;
  border: 1px solid rgb(235, 234, 242);
  border-radius: 2px;
  box-shadow: rgb(17 17 49 / 12%) 11px 2px 16px;
  padding-left: 10px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid rgb(235, 234, 242);
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: rgb(17 17 49 / 12%) 6px 6px 16px;
`;
export const HeaderUl = styled.ul`
  display: flex;
  gap: 40px;

  li {
    font-weight: 700;
    text-transform: uppercase;
  }
`;
export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  color: #cd0000;
  text-transform: uppercase;

  &:after {
    content: url(${loop});
    position: absolute;
    right: 5px;
    top: -3px;
  }
`;
