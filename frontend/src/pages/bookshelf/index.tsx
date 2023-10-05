import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/bookshelf/index.styled';
import BookCover from '@src/components/atoms/bookCover';
import BooksContainer from '@src/components/organisms/booksContainer';
import { useRouter } from 'next/router';
import { getBookshelfResProp } from '@src/types/book';
import { useEffect, useState } from 'react';
import { bookApi } from '@src/apis';
import { bookListProp } from '@src/types/author';

type bookDetailProp = {
  bookId: number;
  title: string;
  author: string;
  cover: string;
  publicationDate: string;
  genre: string;
  address: string;
};

export default function Bookshelf() {
  const router = useRouter();

  const [bookList, setBookList] = useState<getBookshelfResProp[]>([]);
  const [firstBook, setFirstBook] = useState<bookDetailProp>();

  useEffect(() => {
    bookApi.getBookShelf().then((res) => {
      let newBookList: getBookshelfResProp[] = [];
      res.data.forEach((bookshelf: getBookshelfResProp) => {
        newBookList.push({ ...bookshelf });
      });
      setBookList(newBookList);
    });
  }, []);

  useEffect(() => {
    if (bookList.length) {
      bookApi.getBookDetail(bookList[0].bookId).then((res) => {
        console.log('setfirstbook', res);
        const date = new Date(res.data.bookDetail.publicationDate);
        const dateString = date.toLocaleDateString('ko-ko', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
        console.log(date);
        setFirstBook({ ...res.data.bookDetail, author: res.data.bookDetail.nickname, publicationDate: dateString });
      });
    }
  }, [bookList]);

  const handleBookClick = (bookId: number | undefined) => {
    if (bookId !== undefined) {
      router.push(`/ebook/${bookId}`);
    }
  };

  const [wishList, setWishList] = useState<bookListProp[]>();
  useEffect(() => {
    bookApi.getWishList().then((res) => {
      console.log(res);
      if (res.data) {
        setWishList(res.data);
      }
    });
  }, []);

  const handlePageClick = () => {};

  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        {firstBook && (
          <>
            <S.SubTitle>지금 보고 있는 책</S.SubTitle>
            <S.Box>
              <S.Left>
                <S.Title onClick={() => handleBookClick(firstBook?.bookId)}>{firstBook?.title}</S.Title>
                <S.Content>
                  {firstBook?.publicationDate} ·{firstBook?.author} · {firstBook?.genre}
                </S.Content>
              </S.Left>
              <S.CoverContainer>
                {firstBook ? (
                  <BookCover imgsrc={firstBook.cover} onClick={() => handleBookClick(firstBook?.bookId)} />
                ) : (
                  <></>
                )}
              </S.CoverContainer>
            </S.Box>
          </>
        )}
        <BooksContainer page="bookShelf" title="모든 책" data={bookList} onClick={handleBookClick} />
        {wishList?.length && (
          <BooksContainer page="wishList" title="관심있는 책" data={wishList} onClick={handlePageClick} />
        )}
      </S.Container>
    </>
  );
}
