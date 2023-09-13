import styled from 'styled-components';
import Image from 'next/image';
import { BookCoverProps } from '@src/types/props';

export const ImgContainer = styled.div<BookCoverProps>`
  width: ${({size}) => (size === 'small' ? '2.9rem' : '16.8rem')};
  height: ${({size}) => (size === 'small' ? '4.2rem' : '22.3rem')};
  border-radius: ${({size}) => (size === 'small' ? '0.2rem' : '1.2rem')};
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;
