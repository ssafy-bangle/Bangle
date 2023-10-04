import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';
import { getBookshelfResProp } from '@src/types/book';

export default function Book({ data, imgsrc, onClick }: BookProps) {
  return (
    <> {
      onClick && 
      <div>
        <BookCover imgsrc={imgsrc} onClick={()=>onClick(data?.address)} />
        <S.BookTitle onClick={()=>onClick(data?.address)}>{data?.title}</S.BookTitle>
      </div>
    } </>
  );
}