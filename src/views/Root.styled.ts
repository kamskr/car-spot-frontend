import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 70px;
  }
`;
