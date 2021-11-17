import styled from 'styled-components';

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
`;
