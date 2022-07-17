import React from 'react';

import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
};
