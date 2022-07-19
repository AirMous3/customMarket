import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from '@/components/App';
import { theme } from '@/defaultTheme';

import { Global } from './GlobalStyles';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>,
);
