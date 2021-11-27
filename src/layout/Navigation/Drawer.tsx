import React from 'react';
import styled from '@xstyled/styled-components';
import MUIDrawer from '@mui/material/Drawer';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <MUIDrawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      <p>Side drawer here</p>
    </MUIDrawer>
  );
};
