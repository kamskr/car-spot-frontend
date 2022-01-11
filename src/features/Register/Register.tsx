import React from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes/routes';
import styled from '@xstyled/styled-components';
import { RegisterForm } from './components';

export const Register = () => {
  return (
    <ContentContainer>
      <RegisterContent>
        <Typography variant="h2">Welcome to car spot!</Typography>
        <Typography>Log in to access all features!</Typography>
        <Typography>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          ...or <NavLink to={routes.register}>register</NavLink> if you haven't already
        </Typography>
        <RegisterForm />
      </RegisterContent>
    </ContentContainer>
  );
};

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
