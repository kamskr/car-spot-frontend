import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from 'providers/GlobalProvider';
import { SearchSpots } from 'views/SearchSpots';
import { Navigation } from 'layout/Navigation/Navigation';
import { NotFound } from './NotFound';

export const Root = () => {
  return (
    <Router>
      <GlobalProvider>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <SearchSpots />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  );
};
