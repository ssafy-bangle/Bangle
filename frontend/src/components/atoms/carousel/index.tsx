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
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
        </S.Section>
      </div>
      <div>
        <S.Section>
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
          <BookCover imgsrc={TestBook} />
        </S.Section>
      </div>
    </C>
  );
}
