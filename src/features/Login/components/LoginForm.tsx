import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from '@xstyled/styled-components';
import { LoginUserDTO } from 'api/models';
import { useAuth } from 'contexts';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginUserDTO>();
  const { user, login, isLoading } = useAuth();

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return (
    <LoginFormContainer variant="outlined">
      <Form onSubmit={onSubmit}>
        <TextField {...register('identifier')} label="Login or Email" variant="standard" />
        <TextField {...register('password')} type="password" label="Password" variant="standard" />

        <LoadingButton type="submit" variant="contained" loading={isLoading}>
          Login
        </LoadingButton>
      </Form>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled(Card)`
  margin-top: 30px;
  padding: 30px;
  max-width: 100vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  @media screen and (min-width: 800px) {
    width: 500px;
  }
`;
