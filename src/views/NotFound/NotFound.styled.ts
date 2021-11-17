import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const NotFoundHeader = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 150px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 80px;
  }
`;

export const NotFoundText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 40px;
  text-align: center;
`;
