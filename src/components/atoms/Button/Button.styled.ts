import styled, { css } from 'styled-components';
import { ButtonVariant } from './Button.types';

export const Button = styled.button<{ variant: ButtonVariant; reverseColors?: boolean; disabled?: boolean }>`
  padding: 12px 18px;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  border: 1px solid transparent;
  outline: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: ${({ theme, variant }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out, color 0.2s ease-in-out, scale 0.1s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? '.6' : '1')};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  div,
  svg {
    height: 13px;
    width: 13px;
  }

  &:active:enabled {
    transform: scale(1.02);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:hover:enabled {
      background-color: transparent;
      border: 1px solid ${({ theme, variant }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
      color: ${({ theme, variant }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
      svg {
        animation: col 0.2s linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
    }
  }

  ${({ reverseColors, variant }) =>
    reverseColors &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
      color: ${({ theme }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};

      svg {
        fill: ${({ theme }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        &:hover:enabled {
          background-color: ${({ theme }) => (variant === ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
          border: 1px solid transparent;
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `};

  ${({ variant }) =>
    variant === ButtonVariant.redNoBorders &&
    css`
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.error};

      svg {
        fill: ${({ theme }) => theme.colors.error};
        animation: none;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        &:hover:enabled {
          border: none;
          background-color: transparent;
          color: ${({ theme }) => theme.colors.error};
          svg {
            animation: none;
          }
        }
      }

      Spinner {
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top-color: ${({ theme }) => theme.colors.error} !important;
      }
    `}

  @keyframes col {
    0% {
      fill: ${({ theme }) => theme.colors.white};
    }

    100% {
      fill: ${({ theme, variant }) => (variant !== ButtonVariant.primary ? theme.colors.primary : theme.colors.secondary)};
    }
  }
`;

export const Spinner = styled.div<{ variant: ButtonVariant }>`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme, variant }) => (variant === ButtonVariant.redNoBorders ? 'rgba(238, 74, 90, 0.3)' : 'rgba(255, 255, 255, 0.3)')};
  border-top-color: ${({ theme, variant }) => (variant === ButtonVariant.redNoBorders ? theme.colors.error : '#fff')};
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
