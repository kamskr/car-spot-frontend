import React from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes/routes';
import { AuthContent } from './Login.styled';
import { LoginForm } from './components';

export const Login = () => {
  return (
    <ContentContainer>
      <AuthContent>
        <Typography variant="h2">Welcome to car spot!</Typography>
        <Typography>Log in to access all features!</Typography>
        <Typography>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          ...or <NavLink to={routes.register}>register</NavLink> if you haven't already
        </Typography>
        <LoginForm />
      </AuthContent>
    </ContentContainer>
  );
};
