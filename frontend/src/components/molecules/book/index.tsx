import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';

export default function Book({ imgsrc, onClick }: BookProps) {
  return (
    <div>
      <BookCover imgsrc={imgsrc} onClick={onClick} />
      <S.BookTitle onClick={onClick}>BookTitle</S.BookTitle>
    </div>
  );
}
