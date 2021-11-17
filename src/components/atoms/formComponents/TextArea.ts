import styled from 'styled-components';
import { Input } from './Input';

export const TextArea = styled(Input).attrs({
  as: 'textarea',
})`
  height: 100px;
  resize: none;
`;
