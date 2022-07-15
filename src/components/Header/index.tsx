import React from 'react';

import {
  HeaderContainer,
  HeaderInput,
  HeaderUl,
  TitleWrapper,
} from './components';

export const Header = () => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <div>Custom.</div>
        <HeaderInput />
      </TitleWrapper>
      <div>
        <HeaderUl>
          <li>/shop</li>
          <li>/sell</li>
          <li>favorite</li>
          <li>profile</li>
        </HeaderUl>
      </div>
    </HeaderContainer>
  );
};
