import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import styled from '@xstyled/styled-components';

interface Props {
  open: boolean;
  handleClose: (event: Event) => void;
  children: React.ReactNode;
}

export const CSModal = ({ open, handleClose, children }: Props) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: white;
  box-shadow: 24;
  padding: 20px;
`;
