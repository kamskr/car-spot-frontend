import React from 'react';
import { ContentContainer } from 'layout/ContentContainer';
import { useUser } from 'contexts';
import styled from '@xstyled/styled-components';

export const Profile = () => {
  const user = useUser();

  if (!user) {
    return <p>no user data</p>;
  }

  return (
    <ContentContainer style={{ display: 'flex' }}>
      <ProfileContent>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.surname}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.cars.length}</p>
        <p>{user.parking_spots.length}</p>
      </ProfileContent>
    </ContentContainer>
  );
};

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
