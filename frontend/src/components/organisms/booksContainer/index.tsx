import * as S from './index.styled';
import BookCover from '@src/components/atoms/bookCover';
import { BooksContainerProps } from '@src/types/props';
import { useState } from 'react';
import Book from '@src/components/molecules/book';
import Card from '@src/components/atoms/card';
import NoValue from '@src/components/atoms/noValue';
import { SearchBook } from '@src/types/search';
import { getBookshelfResProp } from '@src/types/book';
import { useRouter } from 'next/router';
import { bookListProp } from '@src/types/author';

export default function BooksContainer({ title, type, page, data, onClick }: BooksContainerProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();

  // page == 'bookShelf'인 경우 Book 컴포넌트 불러오기
  // page == 'search'인 경우 BookCover 컴포넌트 불러오기
  // type == 'book'인 경우 검색된 책 목록을 불러오기
  // type == 'author'인 경우 검색된 작가 목록 불러오기

  const pageOnclickHandler = (bookId: number) => {
    router.push(`/bookshelf/${bookId}`);
  };

  const bookShelfItems = (page: string) => {
    switch (page) {
      case 'bookShelf':
        return data?.map((item: getBookshelfResProp, idx: number) => (
          <Book data={item} key={idx} imgsrc={item.cover} onClick={onClick} />
        ));
      case 'wishList':
        console.log('heeee', data);
        return data?.map((item: bookListProp, idx: number) => (
          <Book data={item} key={idx} imgsrc={item.cover} onClick={() => pageOnclickHandler(item.id)} />
        ));
      default:
        return null;
    }
  };

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
          {page !== 'search' && bookShelfItems(page)}
          {type === 'book' &&
            data?.map((item: SearchBook, idx: number) => (
              <BookCover key={idx} imgsrc={item.cover} onClick={() => pageOnclickHandler(item.id)} />
            ))}
          {type === 'author' &&
            data?.map((item: { id: number; nickname: string }, idx: number) => (
              <Card
                key={idx}
                type="author"
                title={item.nickname}
                selected
                onClick={() => router.push(`/author/${item.id}`)}
              />
            ))}
        </S.BookContainer>
      )}
    </>
  );
}
