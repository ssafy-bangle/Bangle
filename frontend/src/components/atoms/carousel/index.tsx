import * as S from './index.styled';
import React, { useEffect } from 'react';
import { Carousel as C } from 'antd';
import BookCover from '../bookCover';
import { useRouter } from 'next/router';
import { RecommendBook } from '@src/types/book';

export default function Carousel({ data }: { data: RecommendBook[] }) {
  const router = useRouter();
  return (
    <C autoplay>
      <div>
        <S.Section>
          {data?.slice(0, 6).map((item: RecommendBook) => (
            <BookCover imgsrc={item.cover} onClick={() => router.push(`/bookshelf/${item.id}`)} />
          ))}
        </S.Section>
      </div>
      <div>
        <S.Section>
          {data?.slice(6, 12).map((item: RecommendBook) => (
            <BookCover imgsrc={item.cover} onClick={() => router.push(`/bookshelf/${item.id}`)} />
          ))}
        </S.Section>
      </div>
    </C>
  );
}
