import React from 'react';
import { ReactSVG } from 'react-svg';
import * as Styled from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = ({ text, icon, type, onClick, variant, reverseColors, disabled, isLoading }: ButtonProps) => (
  <Styled.Button type={type || 'button'} onClick={onClick} variant={variant} reverseColors={reverseColors} disabled={disabled}>
    {icon && !isLoading && <ReactSVG src={icon} />}
    {!isLoading ? <>{text}</> : <Styled.Spinner variant={variant} />}
  </Styled.Button>
);
