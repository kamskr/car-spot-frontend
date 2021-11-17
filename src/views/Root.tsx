import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { GlobalStyle, theme } from 'theme';
import { Wrapper } from './Root.styled';
import { NotFound } from './NotFound';

export const Root = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <p>main page</p>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Wrapper>
        </ThemeProvider>
      </QueryParamProvider>
    </Router>
  );
};
