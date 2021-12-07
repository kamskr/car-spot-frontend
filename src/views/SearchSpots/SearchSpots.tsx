import React, { useEffect, useState } from 'react';
import { api } from 'api';
import { ParkingSpot } from 'api/models';
import { SpotsMap } from 'components/SpotsMap/SpotsMap';
import useApiRequest from 'hooks/useApiRequest';
import styled from 'styled-components';
import { SpotsList } from 'components/SpotsList';

const Container = styled.div`
  height: calc(100vh - 64px);
  display: flex;
`;

export const SearchSpots = () => {
  return (
    <div>
      <Container>
        <SpotsList />
        <SpotsMap />
      </Container>
    </div>
  );
};
