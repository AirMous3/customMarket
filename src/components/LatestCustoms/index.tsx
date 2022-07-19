import React from 'react';

import { ArticleTitle } from '@/components/ArticleTitle';
import { latestCustomsConfig } from '@/components/LatestCustoms/config';

import { LatestCustom, LatestCustomsContainer } from './components';

const LATEST_CUSTOMS = 'Latest Customs';

export const LatestCustoms = () => {
  return (
    <div>
      <ArticleTitle title={LATEST_CUSTOMS} />
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
