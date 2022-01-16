import styled from '@xstyled/styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  left: ${({ theme }) => theme.sidebar.width};
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 70px;
  }
`;
