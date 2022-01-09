import React from 'react';
import { Button, Typography } from '@mui/material';
import { NotFoundWrapper, StyledLink } from 'features/NotFound/NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Typography variant="h1" component="div" gutterBottom>
        OOPS!
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        We can&apos;t find the page you&apos;re looking for.
      </Typography>
      <StyledLink to="/">
        <Button variant="outlined">Visit homepage</Button>
      </StyledLink>
    </NotFoundWrapper>
  );
};
