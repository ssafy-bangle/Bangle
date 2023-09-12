import * as S from './index.styled';
import React from 'react';
import { Carousel as C } from 'antd';
import { TestBook } from '@src/assets/imgs';
import BookCover from '../bookCover';

export default function Carousel() {
  return (
    <C autoplay>
      <div>
        <S.Section>
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
        </S.Section>
      </div>
      <div>
        <S.Section>
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
          <BookCover imgSrc={TestBook} />
        </S.Section>
      </div>
    </C>
  );
}
