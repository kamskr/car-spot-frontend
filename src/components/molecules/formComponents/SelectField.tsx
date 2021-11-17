import React from 'react';
import { Label, Select } from 'components/atoms/formComponents';

export interface SelectOption {
  value: string;
  name: string;
}

interface Props {
  id: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  invalid?: boolean;
  [x: string]: any;
}

export const SelectField = React.forwardRef(({ id, label, placeholder, options, invalid, ...rest }: Props, ref) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Select id={id} defaultValue="" {...rest} invalid={invalid}>
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </Select>
  </>
));
