import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/search/index.styled';
import Input from '@src/components/atoms/input';
import Icon from '@src/components/atoms/icon';
import BooksContainer from '@src/components/organisms/booksContainer';

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
      <BooksContainer type='book' page='search' title='도서' />
      <BooksContainer type='author' page='search' title='작가' />
    </>
  );
}
