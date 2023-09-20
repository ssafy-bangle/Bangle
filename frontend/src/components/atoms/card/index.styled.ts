import { CardProps } from '@src/types/props';
import styled from 'styled-components';

export const CardContainer = styled.div<CardProps>`
  background-color: var(--BG_GRAY3);
  width: ${({type}) => type == 'author' ? '26rem':'14.4rem'};
  height: ${({type}) => type == 'author' ? '14rem':'12rem'};
  border-radius: 1.2rem;
  padding: 2rem 1.8rem;
  display: flex;
  ${({ type }) =>
    type === 'author'
      ? `
    flex-direction: column;
    justify-content: space-between;
  `
      : `
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.div`
  color: var(--BG_WHITE);
  font-size: 2rem;
  font-weight: 700;
`;

export const Button = styled.div`
  color: var(--BG_WHITE);
  margin-left: auto;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
`;
