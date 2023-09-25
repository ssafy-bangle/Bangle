import styled from 'styled-components';
import Image from 'next/image';
import { BookCoverProps } from '@src/types/props';

export const ImgContainer = styled.div<BookCoverProps>`
  width: ${({ size }) => (size === 'small' ? '14.4rem' : '17.5rem')};
  height: ${({ size }) => (size === 'small' ? '19.2rem' : '23.5rem')};
  border-radius: 1.2rem;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;
