import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from 'providers/GlobalProvider';
import { Sidebar } from 'components/organisms/Sidebar';
import { Wrapper } from './Root.styled';
import { NotFound } from './NotFound';

export const Root = () => {
  return (
    <Router>
      <GlobalProvider>
        <Sidebar />
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
      </GlobalProvider>
    </Router>
  );
};
