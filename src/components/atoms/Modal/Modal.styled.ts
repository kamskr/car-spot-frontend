import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ModalWindowContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled(motion.div)`
  position: relative;

  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 370px;
    border-radius: ${({ theme }) => theme.borderRadius.regular};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
  }
`;

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 28px;
  right: 17px;
  background-color: transparent;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.colors.grey};
    height: 12px;
    width: 12px;
  }
`;
