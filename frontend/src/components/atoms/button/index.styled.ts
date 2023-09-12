import { ButtonProps } from '@src/types/props';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  width: ${({ length }) => length == 'long' && '31.2rem'};
  padding: ${({length, size}) => {
    const horizontalPadding = size === 'big' ? '1.6rem' : '1.1rem';
    const verticalPadding = length === 'short' ? '1.2rem' : '2.4rem';
    return `${horizontalPadding} ${verticalPadding}`;
  }};
  background-color: ${({ theme }) =>
    theme != 'default' ? 'transparent' : ({ active }) => (active ? '#2cc295' : '#A3A5A9')};
  border-radius: 1.2rem;
  border: ${({ theme }) => theme == 'line' && '1.4px solid var(--BG_WHITE)'};
  color: ${({ theme }) => (theme == 'text' ? 'var(--BG_GRAY2)' : 'var(--BG_WHITE)')};
  font-size: ${({ theme }) => (theme == 'line' ? '1.4rem' : '1.6rem')};
  font-weight: ${({ theme }) => (theme == 'line' ? '400' : '700')};

  &:hover {
    background-color: ${({ theme }) => theme == 'line' && 'rgba(253, 252, 252, 0.25)'};
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  padding-right: 0.8rem;
  padding-bottom: 0.1rem;
`;
