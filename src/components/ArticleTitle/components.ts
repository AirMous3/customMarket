import styled from 'styled-components';

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleSeeMore = styled.a`
  color: ${({ theme }) => theme.colors.darkRed};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 10px;

  &::after {
    content: '→';
  }
`;

export const ArticleSubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
