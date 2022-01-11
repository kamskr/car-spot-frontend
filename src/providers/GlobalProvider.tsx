import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { GlobalStyle, theme } from 'theme';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { AuthProvider, GoogleMapsProvider } from 'contexts';
import { Bootstrap } from 'providers/Bootstrap';

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => (
  <QueryParamProvider ReactRouterRoute={Route}>
    <AuthProvider>
      <GoogleMapsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Bootstrap>{children}</Bootstrap>
        </ThemeProvider>
      </GoogleMapsProvider>
    </AuthProvider>
  </QueryParamProvider>
);
