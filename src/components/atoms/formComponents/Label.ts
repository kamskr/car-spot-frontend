import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 5px;
`;
