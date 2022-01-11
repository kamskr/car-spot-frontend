import React from 'react';
import { SearchSpots } from 'features/SearchSpots';
import { Navigation } from 'layout/Navigation/Navigation';
import { GlobalProvider } from 'providers/GlobalProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import { Login } from 'features/Login';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <Navigation />
        <Switch>
          <Route exact path={routes.home}>
            <SearchSpots />
          </Route>
          <Route exact path={routes.login}>
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  );
};
