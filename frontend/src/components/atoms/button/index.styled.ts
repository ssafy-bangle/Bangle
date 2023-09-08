import { ButtonProps } from '@src/types/props';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: ${({ theme }) =>
    theme == 'line' ? '1.2rem' : ({ length }) => (length == 'short' ? '3.6rem' : '15rem')};
  padding-right: ${({ theme }) =>
    theme == 'line' ? '1.2rem' : ({ length }) => (length == 'short' ? '3.6rem' : '15rem')};
  background-color: ${({ theme }) =>
    theme == 'line' ? 'transparent' : ({ active }) => (active ? '#2cc295' : '#A3A5A9')};
  height: ${({ size }) => (size == 'small' ? '6.1rem' : '4.5rem')};
  border-radius: 1.2rem;
  border: ${({ theme }) => theme == 'line' && '1.4px solid var(--BG_WHITE)'};
  color: var(--BG_WHITE);
  font-size: ${({ theme }) => (theme == 'line' ? '1.4rem' : ({ size }) => (size == 'small' ? '1.6rem' : '2rem'))};
  font-weight: ${({ theme }) => (theme == 'line' ? '400' : '700')};
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme == 'line' && 'rgba(253, 252, 252, 0.25)'};
  }
`;

export const Icon = styled.div`
  padding-right: 0.8rem;
  padding-bottom: 0.1rem;
`;
