import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  size?: number;
}

export const ActivityIndicator = ({ size = 80 }: Props) => {
  return (
    <Container data-testid="activity-indicator" size={size}>
      <Circle size={size} />
      <Circle size={size} animationDelay="-0.9s" />
    </Container>
  );
};

const breatheAnimation = keyframes`
    0% {
        transform: scale(0, 0);
        opacity: 0.8;
    }
    100% {
        transform: scale(1, 1);
        opacity: 0;
    }
`;

interface ContainerProps {
  size: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: inline-block;
  padding: 0;
  text-align: left;
`;

interface CircleProps {
  size: number;
  animationDelay?: string;
}

const Circle = styled.div<CircleProps>`
  position: absolute;
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${breatheAnimation} 1.5s linear infinite;
  animation-delay: ${(props) => props.animationDelay};
`;
