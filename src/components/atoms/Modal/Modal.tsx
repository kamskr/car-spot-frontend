import React, { ReactNode } from 'react';
import ReactDom from 'react-dom';
import CloseIcon from 'assets/icons/CloseIcon.svg';
import { ReactSVG } from 'react-svg';
import { CloseButton, ModalContainer, ModalWindowContainer, Overlay, Title } from './Modal.styled';

export interface ModalState {
  toggleModal: () => void;
  isOpen: boolean;
}

interface Props {
  title: string;
  state: ModalState;
  body: ReactNode;
}

const overlayMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const modalContainerMotion = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

export const Modal = ({ title, state, body }: Props) => {
  if (!state.isOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay {...overlayMotion} />
      <ModalWindowContainer>
        <ModalContainer {...modalContainerMotion}>
          <CloseButton type="button" onClick={state.toggleModal} title="Close modal">
            <ReactSVG src={CloseIcon} />
          </CloseButton>
          <Title>{title}</Title>
          {body}
        </ModalContainer>
      </ModalWindowContainer>
    </>,
    document.body,
  );
};
