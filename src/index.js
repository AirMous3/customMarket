import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from '@/components/App';
import { theme } from '@/defaultTheme';

import { Global } from './GlobalStyles';

render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
