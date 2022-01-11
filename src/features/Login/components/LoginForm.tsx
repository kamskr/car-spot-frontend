import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from '@xstyled/styled-components';
import { LoginUserDTO } from 'api/models';
import { useAuth } from 'contexts';
import useApiRequest from 'hooks/useApiRequest';

export const LoginForm = () => {
  const { register, control, handleSubmit } = useForm<LoginUserDTO>();
  const { login } = useAuth();
  const request = useApiRequest();

  const onSubmit = handleSubmit((data) => {
    console.log(login);
    request.dispatch(login(data));
  });

  return (
    <LoginFormContainer variant="outlined">
      <Form onSubmit={onSubmit}>
        <TextField {...register('identifier')} label="Login or Email" variant="standard" />
        <TextField {...register('password')} type="password" label="Password" variant="standard" />

        <LoadingButton type="submit" variant="contained" loading={request.isLoading}>
          Login
        </LoadingButton>
      </Form>
    </LoginFormContainer>
  );
};

const LoginFormContainer = styled(Card)`
  margin-top: 30px;

  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
`;
