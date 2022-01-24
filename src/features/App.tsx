import { Login } from 'features/Login';
import { MyCars } from 'features/MyCars';
import { Profile } from 'features/Profile';
import { Register } from 'features/Register';
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
          <ProtectedRoute allowIf={UserStatus.authenticated} redirectTo={routes.login} exact path={routes.home}>
            <SearchSpots />
          </ProtectedRoute>
          <ProtectedRoute allowIf={UserStatus.authenticated} redirectTo={routes.login} exact path={routes.profile}>
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute allowIf={UserStatus.authenticated} redirectTo={routes.login} exact path={routes.myCars}>
            <MyCars />
          </ProtectedRoute>
          <ProtectedRoute allowIf={UserStatus.unauthenticated} redirectTo={routes.home} exact path={routes.login}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute allowIf={UserStatus.unauthenticated} redirectTo={routes.home} exact path={routes.register}>
            <Register />
          </ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  );
};
