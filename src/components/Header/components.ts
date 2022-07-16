import styled from 'styled-components';

import heart from '@/assets/heart.svg';
import loop from '@/assets/loop.svg';
import user from '@/assets/user.svg';

export const HeaderInput = styled.input`
  margin-left: 20px;
  min-width: 300px;
  height: 25px;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  padding-left: 10px;
  padding-right: 25px;
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

  &:after {
    content: url(${loop});
    position: absolute;
    right: 5px;
    top: 12px;
    padding-left: 60px;
  }
`;

export const HeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkRed};
  text-transform: uppercase;
  cursor: pointer;

  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }

  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }

  &:hover {
    background: #fcfdff;
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 1s infinite;
  }
`;

export const HeaderFavorite = styled.span`
  display: inline-block;
  background-image: url(${heart});
  width: 20px;
  height: 20px;
`;

export const HeaderUser = styled.span`
  display: inline-block;
  background-image: url(${user});
  width: 20px;
  height: 20px;
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 15px;
`;

export const HeaderNavbarUl = styled.ul`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  gap: 20px;

  li {
    text-transform: uppercase;
  }
`;
