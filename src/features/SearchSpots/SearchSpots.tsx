import React, { useEffect, useState } from 'react';

import { ContentContainer } from 'layout/ContentContainer';
import { ParkingSpotsProvider, useParkingSpots } from 'features/SearchSpots/context/ParkingSpots.context';
import { LoadingPage } from 'features/LoadingPage';
import { SpotsMap, SpotsList } from './components';

export const SearchSpots = () => {
  return (
    <ContentContainer style={{ display: 'flex' }}>
      <ParkingSpotsProvider>
        <SpotsList />
        <SpotsMap />
      </ParkingSpotsProvider>
    </ContentContainer>
  );
};
