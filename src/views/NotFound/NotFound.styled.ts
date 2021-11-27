import styled from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
