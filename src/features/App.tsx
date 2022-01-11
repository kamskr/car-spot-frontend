import { useAuth } from 'contexts';
import { LoadingPage } from 'features/LoadingPage';
import { Login } from 'features/Login';
import { SearchSpots } from 'features/SearchSpots';
import { Navigation } from 'layout/Navigation/Navigation';
import { GlobalProvider } from 'providers/GlobalProvider';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute, UserStatus } from 'routes/ProtectedRoute';
import { routes } from 'routes/routes';
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
          <ProtectedRoute allowIf={UserStatus.unauthenticated} redirectTo={routes.home} exact path={routes.login}>
            <Login />
          </ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  );
};
