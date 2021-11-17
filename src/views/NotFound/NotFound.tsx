import React from 'react';
import { Button, ButtonVariant } from 'components/atoms/Button';
import { NotFoundHeader, NotFoundText, NotFoundWrapper, StyledLink } from 'views/NotFound/NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundHeader>OOPS!</NotFoundHeader>
      <NotFoundText>We can&apos;t find the page you&apos;re looking for.</NotFoundText>
      <StyledLink to="/">
        <Button text="Visit homepage" variant={ButtonVariant.secondary} reverseColors />
      </StyledLink>
    </NotFoundWrapper>
  );
};
