import { Button, Card, TextField } from '@mui/material';
import styled from '@xstyled/styled-components';
import React from 'react';

export const LoginForm = () => {
  return (
    <LoginFormContainer variant="outlined">
      <TextField id="identifier" label="Login or Email" variant="standard" />
      <TextField type="password" id="password" label="Password" variant="standard" />
      <Button variant="contained">Login</Button>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled(Card)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 30px;
`;
