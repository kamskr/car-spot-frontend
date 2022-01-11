import React, { useEffect, useState } from 'react';
import { api } from 'api';
import { ParkingSpot } from 'api/models';
import { SpotsMap } from 'components/SpotsMap/SpotsMap';
import useApiRequest from 'hooks/useApiRequest';

import { SpotsList } from 'components/SpotsList';
import { ContentContainer } from 'layout/ContentContainer';

export const SearchSpots = () => {
  return (
    <ContentContainer style={{ display: 'flex' }}>
      <SpotsList />
      <SpotsMap />
    </ContentContainer>
  );
};
