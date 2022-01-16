import React, { useEffect, useState } from 'react';
import { api } from 'api';
import { ParkingSpot } from 'api/models';
import { ContentContainer } from 'layout/ContentContainer';
import { SpotsMap, SpotsList } from './components';

export const SearchSpots = () => {
  return (
    <ContentContainer style={{ display: 'flex' }}>
      <SpotsList />
      <SpotsMap />
    </ContentContainer>
  );
};
