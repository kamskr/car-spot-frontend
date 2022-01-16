import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@xstyled/styled-components';
import { MySpotsList } from './components/MySpotsList';

export const SpotsList = () => {
  return (
    <SideListContainer>
      <Typography variant="h4" component="h2">
        My spots
      </Typography>
      <Button>Pick slot on the map</Button>
      <MySpotsList items={[]} />
    </SideListContainer>
  );
};

const SideListContainer = styled.div`
  width: 400px;
  max-height: 100%;
  overflow-y: auto;
  padding: 10px 10px 0 10px;
`;
