import React from 'react';
import styled from 'styled-components';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

const Main = styled.div``;

export const App = () => {
  return (
    <Main>
      <Container>
        <Header />
      </Container>
    </Main>
  );
};
