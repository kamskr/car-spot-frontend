import React from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { useAuth } from 'contexts';
import { Card, TextField, Typography } from '@mui/material';
import styled from '@xstyled/styled-components';
import useApiRequest from 'hooks/useApiRequest';
import { useForm } from 'react-hook-form';
import { UserDTO } from 'api/models';
import LoadingButton from '@mui/lab/LoadingButton';
import { api } from 'api';

export const Profile = () => {
  const { user, reloadUser } = useAuth();
  const { register, handleSubmit } = useForm<UserDTO>({
    defaultValues: {
      username: user?.username || '',
      email: user?.email || '',
      name: user?.name || '',
      surname: user?.surname || '',
    },
  });
  const request = useApiRequest();

  const onSubmit = handleSubmit(async (data) => {
    await request.dispatch(api.updateUser(user?.id || '', data));
    reloadUser();
  });

  if (!user) {
    return <p>no user data</p>;
  }

  return (
    <ContentContainer style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <ProfileContent style={{ backgroundColor: 'white' }}>
          <Typography variant="h2">Profile details</Typography>
          <p>ID: {user.id}</p>
          <p>Cars count: {user.cars.length}</p>
          <p>Spots reserved: {user.parking_spots.length}</p>
          <Form onSubmit={onSubmit}>
            <TextField {...register('username')} type="text" label="Username" variant="standard" />
            <TextField {...register('email')} type="email" label="Email" variant="standard" />
            <TextField {...register('name')} type="text" label="Name" variant="standard" />
            <TextField {...register('surname')} type="text" label="Surname" variant="standard" />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <LoadingButton type="submit" variant="contained" loading={request.isLoading}>
                Update profile
              </LoadingButton>
            </div>
          </Form>
        </ProfileContent>
      </div>
    </ContentContainer>
  );
};

const ProfileContent = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: red;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
`;
