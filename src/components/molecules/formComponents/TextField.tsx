import React from 'react';
import { Label, Input } from 'components/atoms/formComponents';

interface Props {
  id: string;
  label: string;
  [x: string]: any;
}

export const TextField = React.forwardRef(({ id, label, ...rest }: Props, ref) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type="text" {...rest} />
  </>
));
