import { ButtonProps } from '@src/types/props';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  height: ${({ size }) => (size == 'small' ? '6.1rem' : '4.5rem')};
  padding-left: ${({ length }) => (length == 'short' ? '3.6rem' : '15rem')};
  padding-right: ${({ length }) => (length == 'short' ? '3.6rem' : '15rem')};
  background-color: ${({ active }) => (active ? '#2cc295' : '#A3A5A9')};
  border-radius: 1.2rem;
  color: var(--BG_WHITE);
  font-size: ${({ size }) => (size == 'small' ? '2rem' : '1.6rem')};
  font-weight: 700;
`;
