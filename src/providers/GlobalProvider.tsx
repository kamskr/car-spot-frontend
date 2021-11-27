import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { GlobalStyle, theme } from 'theme';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => (
  <QueryParamProvider ReactRouterRoute={Route}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </QueryParamProvider>
);
