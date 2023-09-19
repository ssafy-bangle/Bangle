import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/search/index.styled';
import Input from '@src/components/atoms/input';
import Icon from '@src/components/atoms/icon';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';

export default function Search() {
  return (
    <>
      <PageTitle children="검색" />
      <S.Container>
        <S.SearchInput>
          <Input size="long" state="default" placeholder="검색어를 입력하세요" setInput={() => {}} />
          <S.SearchBtn onClick={() => {}}>
            <Icon name="search" />
          </S.SearchBtn>
        </S.SearchInput>
      </S.Container>
      <S.SubTitle>모든 책</S.SubTitle>
      <S.BookContainer>
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
        <BookCover imgSrc={TestBook} />
      </S.BookContainer>
    </>
  );
}
