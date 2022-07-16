import React from 'react';

import {
  HeaderContainer,
  HeaderFavorite,
  HeaderInput,
  HeaderNavbar,
  HeaderNavbarUl,
  HeaderTitle,
  HeaderUl,
  HeaderUser,
  HeaderWrapper,
  TitleWrapper,
} from './components';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <TitleWrapper>
          <HeaderTitle>Custom.</HeaderTitle>
          <HeaderInput />
        </TitleWrapper>
        <HeaderUl>
          <li>/shop</li>
          <li>/sell</li>
          <li>
            <HeaderFavorite />
          </li>
          <li>
            <HeaderUser />
          </li>
        </HeaderUl>
      </HeaderWrapper>
      <HeaderNavbar>
        <HeaderNavbarUl>
          <li>all categories</li>
          <li>shoes</li>
          <li>clothing</li>
          <li>tops</li>
          <li style={{ color: '#cd0000' }}>only custom</li>
          <li>accessories</li>
          <li>vintage</li>
          <li>merch</li>
        </HeaderNavbarUl>
      </HeaderNavbar>
    </HeaderContainer>
  );
};
