import styled from '@xstyled/styled-components';

export const Wrapper = styled.div`
  position: fixed;
  background-color: background;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${({ theme }) => theme.sidebar.width};
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 70px;
  }
`;
