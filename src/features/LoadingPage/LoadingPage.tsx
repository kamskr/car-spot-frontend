import { CircularProgress } from '@mui/material';
import styled from '@xstyled/styled-components';
import React from 'react';

interface Props {
  withNavbar?: boolean;
}
export const LoadingPage = ({ withNavbar }: Props) => {
  return (
    <LoadingPageContainer>
      <CircularProgress size={100} />
    </LoadingPageContainer>
  );
};

const LoadingPageContainer = styled.div<Props>`
  width: 100vw;
  height: ${({ withNavbar }) => (withNavbar ? '100vh' : 'calc(100vh - 64px)')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
