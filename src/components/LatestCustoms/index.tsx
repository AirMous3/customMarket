import React from 'react';

import { ArticleTitle } from '@/components/ArticleTitle';
import { latestCustomsConfig } from './config';

import { LatestCustom, LatestCustomsContainer } from './components';

const LATEST_CUSTOMS_TITLE = 'Latest';
const LATEST_CUSTOMS_SUBTITLE = 'Customs';

export const LatestCustoms = () => {
  return (
    <div>
      <ArticleTitle
        title={LATEST_CUSTOMS_TITLE}
        subtitle={LATEST_CUSTOMS_SUBTITLE}
      />
      <LatestCustomsContainer>
        {latestCustomsConfig.map(({ path, image }, index) => (
          <a href={path} key={index}>
            <LatestCustom image={image} />
          </a>
        ))}
      </LatestCustomsContainer>
    </div>
  );
};
