import React from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { useUser } from 'contexts';
import { Card, Typography } from '@mui/material';
import styled from '@xstyled/styled-components';

export const Profile = () => {
  const user = useUser();

  if (!user) {
    return <p>no user data</p>;
  }

  return (
    <ContentContainer style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <ProfileContent style={{ backgroundColor: 'white' }}>
          <Typography variant="h2">Profile details</Typography>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.surname}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.cars.length}</p>
          <p>{user.parking_spots.length}</p>
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
