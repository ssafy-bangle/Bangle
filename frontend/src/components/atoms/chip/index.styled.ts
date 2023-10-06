import { ChipProps } from '@src/types/props';
import styled from 'styled-components';

export const ChipContainer = styled.button<ChipProps>`
  display: inline-flex;
  align-items: center;
  padding: ${({size}) => (size == 'small' ? '0.8rem 2rem' : '0.8rem 2rem 0.8rem 0.8rem')};
  background-color: ${({size}) => (size == 'small' ? 'var(--BG_WHITE)' : 'var(--BG_GRAY3)')};
  color: ${({size}) => (size == 'small' ? 'var(--BG_GRAY3)' : 'var(--BG_WHITE)')};
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  opacity: ${({size}) => (size == 'small' ? '100%' : '75%')};
  &:hover {
    opacity: ${({size}) => (size == 'small' ? '90%' : '100%')};
    cursor: pointer;
  }
  &:focus {
    opacity: 100%;
    box-shadow: ${({size}) => (size == 'big' && '0 0 0 2px var(--BG_MAIN) inset')};
  }
`;

export const Title = styled.div`
  margin-left: 1.2rem;
`;

export const IconContainer = styled.div`
  margin-bottom: 0.1rem;
  padding-bottom: 0.1rem;
`;
