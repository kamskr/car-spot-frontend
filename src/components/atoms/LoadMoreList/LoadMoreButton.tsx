import React from 'react';
import { ActivityIndicator } from 'components/atoms/ActivityIndicator';
import { Button, ButtonVariant } from 'components/atoms/Button';
import styled from 'styled-components';

interface LoadMoreButtonProps {
  hasMore?: boolean;
  isLoading?: boolean;
  loadMore: () => void;
}

export const LoadMoreButton = ({ hasMore, isLoading, loadMore }: LoadMoreButtonProps) => {
  return (
    <Wrapper>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <LoadButtonContainer>{hasMore && <Button variant={ButtonVariant.secondary} text="Load more" onClick={loadMore} />}</LoadButtonContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background: linear-gradient(0deg, rgba(245, 246, 251, 1) 0%, rgba(245, 246, 251, 0.7) 45%, rgba(245, 246, 251, 0) 100%);
  Button {
    width: 150px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 0;
  }
`;
