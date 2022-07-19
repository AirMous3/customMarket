import React from 'react';

import { ArticleTitle } from '@/components/ArticleTitle';

import { PopularCustom, PopularCustomsContainer } from './components';
import { popularCustomsConfig } from './config';

const POPULAR_CUSTOMS_TITLE = 'Popular';
const POPULAR_CUSTOMS_SUBTITLE = 'Customs';

export const PopularCustoms = () => {
  return (
    <div>
      <ArticleTitle
        title={POPULAR_CUSTOMS_TITLE}
        subtitle={POPULAR_CUSTOMS_SUBTITLE}
      />

      <PopularCustomsContainer>
        {popularCustomsConfig.map(({ path, image }, index) => (
          <a href={path} key={index}>
            <PopularCustom image={image} />
          </a>
        ))}
      </PopularCustomsContainer>
    </div>
  );
};
