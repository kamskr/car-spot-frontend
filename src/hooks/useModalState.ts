import { useState } from 'react';
import { ModalState } from 'components/atoms/Modal';

interface Props {
  actionOnClose?: () => void;
}

export const useModalState = ({ actionOnClose }: Props): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    if (isOpen && actionOnClose) {
      actionOnClose();
    }
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleModal,
  };
};
