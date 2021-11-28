import React from 'react';
import { CircularProgress } from '@mui/material';
import styled from '@xstyled/styled-components';

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = () => {
  return (
    <Center>
      <CircularProgress />
    </Center>
  );
};
