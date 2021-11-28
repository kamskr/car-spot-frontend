import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { GlobalStyle, theme } from 'theme';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { GoogleMapsProvider } from 'contexts/GoogleMapsContext';

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => (
  <QueryParamProvider ReactRouterRoute={Route}>
    <GoogleMapsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GoogleMapsProvider>
  </QueryParamProvider>
);
