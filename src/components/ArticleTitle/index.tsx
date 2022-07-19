import React from 'react';

import {
  ArticleContainer,
  ArticleSeeMore,
  ArticleSubTitle,
} from './components';

type ArticlePropsType = {
  title: string;
};

export const ArticleTitle = ({ title }: ArticlePropsType) => {
  return (
    <ArticleContainer>
      <ArticleSubTitle>{title}</ArticleSubTitle>
      <ArticleSeeMore href={'#ololo'}>see all</ArticleSeeMore>
    </ArticleContainer>
  );
};
