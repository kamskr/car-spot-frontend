import React from 'react';
import { Label, TextArea } from 'components/atoms/formComponents';

interface Props {
  id: string;
  label: string;
  [x: string]: any;
}

export const TextAreaField = React.forwardRef(({ id, label, ...rest }: Props, ref) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <TextArea id={id} {...rest} />
  </>
));
