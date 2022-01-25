import { ParkingSpot } from 'api/models';
import { ParkingSpotsProvider } from 'features/SearchSpots/context/ParkingSpots.context';
import { ContentContainer } from 'layout/ContentContainer';
import React, { useState } from 'react';
import { SpotsList, SpotsMap } from './components';

export const SearchSpots = () => {
  const [activeAddress, setActiveAddress] = useState<ParkingSpot | null>(null);
  return (
    <ContentContainer style={{ display: 'flex' }}>
      <ParkingSpotsProvider>
        <SpotsList activeAddress={activeAddress} setActiveAddress={setActiveAddress} />
        <SpotsMap activeAddress={activeAddress} setActiveAddress={setActiveAddress} />
      </ParkingSpotsProvider>
    </ContentContainer>
  );
};
