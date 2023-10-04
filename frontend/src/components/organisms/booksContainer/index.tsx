import { StaticImageData } from 'next/image';
import * as S from './index.styled';
import BookCover from '@src/components/atoms/bookCover';
import { TestBook } from '@src/assets/imgs';
import { BooksContainerProps } from '@src/types/props';
import { useEffect, useState } from 'react';
import Book from '@src/components/molecules/book';
import Card from '@src/components/atoms/card';
import NoValue from '@src/components/atoms/noValue';
import { SearchBook } from '@src/types/search';
import { getBookshelfResProp } from '@src/types/book';
import { useRouter } from 'next/router';

export default function BooksContainer({ title, type, page, data, onClick }: BooksContainerProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  // type == 'book'인 경우 검색된 책 목록을 불러오기
  // type == 'author'인 경우 검색된 작가 목록 불러오기
  // page == 'bookShelf'인 경우 Book 컴포넌트 불러오기
  // page == 'search'인 경우 BookCover 컴포넌트 불러오기

  return (
    <>
      <S.TitleContainer>
        <S.SubTitle>
          {title} {page === 'search' && <S.BookLength>총 {data?.length} 건의 검색 결과가 있습니다</S.BookLength>}
        </S.SubTitle>
        {page === 'search' && data?.length > 6 && (
          <S.TotalBtn onClick={() => setIsClicked((pre) => !pre)}>{isClicked ? '닫기' : '전체보기'}</S.TotalBtn>
        )}
      </S.TitleContainer>
      {!data?.length ? (
        <S.NoValue>
          <NoValue type={page} />
        </S.NoValue>
      ) : (
        <S.BookContainer isClicked={isClicked} page={page} type={type}>
          {page === 'bookShelf' &&
            data?.map((item: getBookshelfResProp, idx: number) => (
              <Book key={idx} imgsrc={item.cover} onClick={onClick} />
            ))}
          {type === 'book' && data?.map((item: SearchBook, idx: number) => <BookCover key={idx} imgsrc={item.cover} />)}
          {type === 'author' &&
            data?.map(
              (
                item: any,
                idx: number, //작가 type이 명세서에 없는 이슈로 임시 any로 지정
              ) => (
                <Card key={idx} type="author" title={item} selected onClick={() => router.push(`/authorpage/${idx}`)} />
              ),
            )}
        </S.BookContainer>
      )}
    </>
  );
}
