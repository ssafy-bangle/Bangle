import styled from 'styled-components';
import Image from 'next/image';
import { BookCoverProps } from '@src/types/props';

export const ImgContainer = styled.div<BookCoverProps>`
  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '2.9rem';
      case 'big':
        return '31.2rem';
      default:
        return '16.8rem';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '4.2rem';
      case 'big':
        return '41.5rem';
      default:
        return '22.3rem';
    }
  }};
  border-radius: ${({ size }) => (size === 'small' ? '0.2rem' : '1.2rem')};
  cursor: pointer;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;
