import { CardProps } from '@src/types/props';
import Image from 'next/image';
import styled from 'styled-components';

export const CardContainer = styled.div<CardProps>`
  background-color: var(--BG_BALCK);
  height: ${({ type }) => (type == 'author' ? '14rem' : '12rem')};
  border-radius: 1.2rem;
  padding: 2rem 1.8rem;
  display: flex;
  overflow: hidden;
  position: relative;
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

export const GenreImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BlackScreen = styled.div<{ isClicked: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--BG_BLACK);
  opacity: ${({ isClicked }) => (isClicked ? '60%' : '20%')};
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  color: var(--BG_WHITE);
  font-size: 2rem;
  font-weight: 700;
  z-index: 1;
  text-shadow: 1px 1px 2px var(--BG_GRAY3);
`;

export const Button = styled.div`
  color: var(--BG_WHITE);
  margin-left: auto;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
`;
