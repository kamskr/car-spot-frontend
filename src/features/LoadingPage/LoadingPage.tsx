import { CircularProgress } from '@mui/material';
import styled from '@xstyled/styled-components';
import React from 'react';

export const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <CircularProgress size={100} />
    </LoadingPageContainer>
  );
};

const LoadingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
