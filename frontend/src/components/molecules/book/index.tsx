import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';

export default function Book({ imgSrc, onClick }: BookProps) {
  return (
    <div>
      <BookCover imgSrc={imgSrc} onClick={onClick} />
      <S.BookTitle onClick={onClick}>BookTitle</S.BookTitle>
    </div>
  );
}
