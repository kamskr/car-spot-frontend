import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Card, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import styled from '@xstyled/styled-components';
import { RegisterUserDTO } from 'api/models';
import { useAuth } from 'contexts';

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterUserDTO>();
  const { register: registerUser, isLoading } = useAuth();

  const onSubmit = handleSubmit((data) => {
    registerUser(data);
  });

  return (
    <RegisterFormContainer variant="outlined">
      <Form onSubmit={onSubmit}>
        <TextField {...register('email')} label="Email" variant="standard" />
        <TextField {...register('username')} label="Username" variant="standard" />
        <TextField {...register('password')} type="password" label="Password" variant="standard" />

        <LoadingButton type="submit" variant="contained" loading={isLoading}>
          Register
        </LoadingButton>
      </Form>
    </RegisterFormContainer>
  );
};

const RegisterFormContainer = styled(Card)`
  margin-top: 30px;

  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
`;
