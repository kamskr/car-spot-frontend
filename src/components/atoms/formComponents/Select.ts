import styled, { css } from 'styled-components';
import { Input } from 'components/atoms/formComponents';
import ArrowDownIcon from 'assets/icons/ArrowDownIcon.svg';

export const Select = styled(Input).attrs({ as: 'select' })<{ invalid?: boolean }>`
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url(${ArrowDownIcon});
  background-position: calc(100% - 10px) calc(100% + -50%);
  background-repeat: no-repeat;

  ${({ invalid }) =>
    invalid &&
    css`
      color: ${({ theme }) => theme.colors.grey};
    `}
`;
