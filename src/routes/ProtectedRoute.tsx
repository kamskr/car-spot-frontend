import React, { FC } from 'react';
import { useAuth } from 'contexts';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export enum UserStatus {
  authenticated = 'authenticated',
  unauthenticated = 'unauthenticated',
}
export interface ProtectedRouteProps extends RouteProps {
  allowIf: UserStatus;
  redirectTo: string;
}

export type ProtectedRouteInheritedProps = Omit<ProtectedRouteProps, 'allowRoles' | 'denyRoles' | 'routeRole'>;

export const ProtectedRoute = ({ allowIf, redirectTo, ...rest }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const userStatus = isAuthenticated ? UserStatus.authenticated : UserStatus.unauthenticated;
  const isDenied = allowIf !== userStatus;

  if (isDenied) {
    return <Redirect to={redirectTo} />;
  }

  return <Route {...rest} />;
};
