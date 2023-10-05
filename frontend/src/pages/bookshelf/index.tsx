import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/bookshelf/index.styled';
import BookCover from '@src/components/atoms/bookCover';
import BooksContainer from '@src/components/organisms/booksContainer';
import { useRouter } from 'next/router';
import { getBookshelfResProp } from '@src/types/book';
import { useEffect, useState } from 'react';
import { bookApi } from '@src/apis';
import { bookListProp } from '@src/types/author';
import { useSetRecoilState } from 'recoil';
import { AlertOpenState } from '@src/modules/state';

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
  const setIsAlertOpen = useSetRecoilState(AlertOpenState);

  const getNewBookshelf = () => {
    bookApi
      .getBookShelf()
      .then((res) => {
        let newBookList: getBookshelfResProp[] = [];
        res.data.forEach((bookshelf: getBookshelfResProp) => {
          newBookList.push({ ...bookshelf });
        });
        setBookList(newBookList);
      })
      .catch(() => {
        setIsAlertOpen(true);
      });
  };

  useEffect(() => {
    if (router.query.new) {
      setTimeout(getNewBookshelf, 80);
      router.replace('/bookshelf');
    }
  }, [router]);

  useEffect(() => {
    getNewBookshelf();
  }, []);

  useEffect(() => {
    if (bookList.length) {
      bookApi
        .getBookDetail(bookList[0].bookId)
        .then((res) => {
          const date = new Date(res.data.bookDetail.publicationDate);
          const dateString = date.toLocaleDateString('ko-ko', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          });
          setFirstBook({ ...res.data.bookDetail, author: res.data.bookDetail.nickname, publicationDate: dateString });
        })
        .catch(() => {
          setIsAlertOpen(true);
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
    bookApi
      .getWishList()
      .then((res) => {
        if (res.data) {
          setWishList(res.data);
        }
      })
      .catch(() => {
        setIsAlertOpen(true);
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
        {wishList && wishList?.length > 0 ? (
          <BooksContainer page="wishList" title="관심있는 책" data={wishList} onClick={handlePageClick} />
        ) : (
          <></>
        )}
      </S.Container>
    </>
  );
}
