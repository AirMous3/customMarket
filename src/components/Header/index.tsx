import React from 'react';

import { navbarCategories } from '@/components/Header/config';

import {
  HeaderContainer,
  HeaderFavorite,
  HeaderInput,
  HeaderNavbar,
  HeaderNavbarLi,
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
          {navbarCategories.map(({ path, label, mode }, index) => (
            <a href={path} key={index}>
              <HeaderNavbarLi mode={mode}>{label}</HeaderNavbarLi>
            </a>
          ))}
        </HeaderNavbarUl>
      </HeaderNavbar>
    </HeaderContainer>
  );
};
