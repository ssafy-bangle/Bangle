import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/bookshelf/index.styled';
// import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';
import BooksContainer from '@src/components/organisms/booksContainer';
import { useRouter } from 'next/router';
import { getBookshelfResProp } from '@src/types/book';
import { useEffect, useState } from 'react';
import { bookApi } from '@src/apis';
import { bookListProp } from '@src/types/author';

type bookDetailProp = {
  title: string;
  author: string;
  cover: string;
  publicationDate: string;
  genre: string;
  address: string;
}

export default function Bookshelf() {
  const router = useRouter();

  // 책의 URL은 여기서 보내지 않는다 (주소에 노출되기때문 => ebook에서 fetch해오도록 한다)
  // TEST를 위한 임시 책 id
  const [bookList, setBookList] = useState<getBookshelfResProp[]>([]);
  const [firstBook, setFirstBook] = useState<bookDetailProp>();
  useEffect(() => {
    bookApi.getBookShelf().then((res) => {
      let newBookList:getBookshelfResProp[] = []
      res.data.forEach((bookshelf:getBookshelfResProp)=>{
        newBookList.push({...bookshelf})
      })
      setBookList(newBookList);

    });
  }, []);

  useEffect(() => {
    if (bookList.length) {
      bookApi.getBookDetail(bookList[0].bookId)
        .then((res) => {
          console.log("setfirstbook", res)
          const date = new Date(res.data.bookDetail.publicationDate)
          const dateString = date.toLocaleDateString("ko-ko", {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          })
          console.log(date)
          setFirstBook({...(res.data.bookDetail), 
            author: res.data.bookDetail.nickname,
            publicationDate: dateString})
        })
    }
  }, [bookList])

  const handleBookClick = (address: string | undefined) => {
    if (address !== undefined) {
      router.push(`/ebook/${address}`);
    }
  };

  const [wishList, setWishList] = useState<bookListProp[]>();
  useEffect(() => {
    bookApi.getWishList().then((res) => {
      console.log(res);
      setWishList(res.data);
    });
  }, []);

  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        <S.SubTitle>지금 보고 있는 책</S.SubTitle>
        <S.Box>
          <S.Left>
            <S.Title onClick={()=>handleBookClick(firstBook?.address)}>{firstBook?.title}</S.Title>
            <S.Content>
            {firstBook?.publicationDate} ·{firstBook?.author} · {firstBook?.genre}
            </S.Content>
          </S.Left>
          <S.CoverContainer>
            {
              firstBook?
              <BookCover imgsrc={firstBook.cover} onClick={()=>handleBookClick(firstBook?.address)} />
              :<></>
            }
          </S.CoverContainer>
        </S.Box>
        <BooksContainer page="bookShelf" title="모든 책" data={bookList} onClick={handleBookClick} />
        {wishList?.length && wishList?.length > 0 && (
          // book detail page 로 router push path 수정 필요
          <BooksContainer page="bookShelf" title="관심있는 책" data={wishList} onClick={() => router.push(`/`)} />
        )}
      </S.Container>
    </>
  );
}
