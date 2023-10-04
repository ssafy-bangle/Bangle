import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';

export default function Book({ title, address, imgsrc, onClick }: BookProps) {
  return (
    <> {
      onClick &&
      <div>
        <BookCover imgsrc={imgsrc} onClick={()=>onClick(address)} />
        <S.BookTitle onClick={()=>onClick(address)}>{title}</S.BookTitle>
      </div>
    } </>
  );
}
