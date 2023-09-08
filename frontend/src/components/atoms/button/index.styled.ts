import { ButtonProps } from '@src/types/props';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: ${({ length }) => (length == 'short' ? '2.4rem' : '15rem')};
  padding-right: ${({ length }) => (length == 'short' ? '2.4rem' : '15rem')};
  background-color: ${({ active }) => (active ? '#2cc295' : '#A3A5A9')};
  border-radius: 1.2rem;
  color: var(--BG_WHITE);
  font-size: ${({ size }) => (size == 'small' ? '1.6rem' : '2rem')};
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  padding-right: 0.8rem;
  padding-bottom: 0.1rem;
`;
