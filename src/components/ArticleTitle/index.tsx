import React from 'react';

import {
  ArticleContainer,
  ArticleSeeMore,
  ArticleSpan,
  ArticleSubTitle,
} from './components';

type ArticlePropsType = {
  title: string;
  subtitle: string;
};

export const ArticleTitle = ({ title, subtitle }: ArticlePropsType) => {
  return (
    <ArticleContainer>
      <ArticleSubTitle>
        {title}
        <ArticleSpan> {subtitle}</ArticleSpan>
      </ArticleSubTitle>
      <ArticleSeeMore href={'#ololo'}>see all</ArticleSeeMore>
    </ArticleContainer>
  );
};
