import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';

export default function Book({ imgSrc }: BookProps) {
  return (
    <div>
      <BookCover imgSrc={imgSrc} />
      <S.BookTitle>BookTitle</S.BookTitle>
    </div>
  );
}
