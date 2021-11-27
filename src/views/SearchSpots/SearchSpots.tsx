import { SpotsMap } from 'components/SpotsMap/SpotsMap';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 400px;
`;

export const SearchSpots = () => {
  return (
    <div>
      <Container>
        <SpotsMap />
      </Container>
    </div>
  );
};
