export enum ButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  redNoBorders = 'redNoBorders',
}

export interface ButtonProps {
  variant: ButtonVariant;
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: ButtonType;
  width?: number;
  reverseColors?: boolean;
}
