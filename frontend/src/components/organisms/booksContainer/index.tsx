import { StaticImageData } from 'next/image';
import * as S from './index.styled';
import BookCover from '@src/components/atoms/bookCover';
import { TestBook } from '@src/assets/imgs';
import { BooksContainerProps } from '@src/types/props';
import { useState } from 'react';
import Book from '@src/components/molecules/book';
import Card from '@src/components/atoms/card';
import NoValue from '@src/components/atoms/noValue';

const dummyList = [
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
  TestBook,
];

export default function BooksContainer({ title, type, page, bookList, onClick }: BooksContainerProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  // type == 'book'인 경우 검색된 책 목록을 불러오기
  // type == 'author'인 경우 검색된 작가 목록 불러오기
  // page == 'bookShelf'인 경우 Book 컴포넌트 불러오기
  // page == 'search'인 경우 BookCover 컴포넌트 불러오기
  return (
    <>
      <S.TitleContainer>
        <S.SubTitle>
          {title} {page === 'search' && <S.BookLength>총 {dummyList.length}건의 검색 결과가 있습니다</S.BookLength>}
        </S.SubTitle>
        {page === 'search' && (
          <S.TotalBtn onClick={() => setIsClicked((pre) => !pre)}>{isClicked ? '닫기' : '전체보기'}</S.TotalBtn>
        )}
      </S.TitleContainer>
      {dummyList.length === 0 ? (
        <S.NoValue>
          <NoValue type={page} />
        </S.NoValue>
      ) : (
        <S.BookContainer isClicked={isClicked} page={page} type={type}>
          {dummyList.map((img: StaticImageData) =>
            page === 'bookShelf' ? (
              <Book imgsrc={img} onClick={onClick} />
            ) : type == 'book' ? (
              <BookCover imgsrc={img} />
            ) : (
              <Card type="author" title="작가" onClick={() => {}} isSelected />
            ),
          )}
        </S.BookContainer>
      )}
    </>
  );
}
