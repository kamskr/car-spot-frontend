import React from 'react';
import styled from '@xstyled/styled-components';

export const SidebarWrapper = styled.div`
  background-color: foreground;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.sidebar.width};
`;

export const Sidebar = () => {
  return (
    <div>
      <p>Sidebar</p>
    </div>
  );
};
