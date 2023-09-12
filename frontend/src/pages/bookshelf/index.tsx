import PageTitle from '@src/components/atoms/pageTitle';
import * as S from './index.styled';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';
import Book from '@src/components/molecules/book';

export default function Bookshelf() {
  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        <S.SubTitle>지금 보고 있는 책</S.SubTitle>
        <S.Box>
          <S.Left>
            <S.Title>BookTitle</S.Title>
            <S.Content>글쓴이 · 2023.09.06 · 분류</S.Content>
          </S.Left>
          <S.CoverContainer>
            <BookCover imgSrc={TestBook} />
          </S.CoverContainer>
        </S.Box>

        <S.SubTitle>모든 책</S.SubTitle>
        <S.BookContainer>
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
          <Book imgSrc={TestBook} />
        </S.BookContainer>
      </S.Container>
    </>
  );
}
