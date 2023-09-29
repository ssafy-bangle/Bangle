import styled from 'styled-components';
import Image from 'next/image';
import { BookCoverProps } from '@src/types/props';

export const ImgContainer = styled.div<BookCoverProps>`
  width: ${({ size }) => (size === 'small' ? '16.8rem' : '17.5rem')};
  height: ${({ size }) => (size === 'small' ? '22.4rem' : '23.5rem')};
  border-radius: 1.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(var(--BG_BLACK), 0.6);
  };
`;

export const ButtonOverlay = styled.button<{ isHovered: boolean }>`
  z-index: 1;
  position: absolute;
  padding: 1rem 2rem;
  background-color: var(--BG_BLACK);
  color: var(--BG_WHITE);
  border-radius: 2rem;
  display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
`;
