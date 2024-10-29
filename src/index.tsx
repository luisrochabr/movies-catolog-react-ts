import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './core/common/store';
import reportWebVitals from './reportWebVitals';
import Router from './core/routes/router';
import { theme } from './core/styles/theme';
import ResetStyles from './core/styles/resets';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResetStyles />

        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
