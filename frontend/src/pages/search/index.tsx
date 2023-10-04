import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/search/index.styled';
import Input from '@src/components/atoms/input';
import Icon from '@src/components/atoms/icon';
import BooksContainer from '@src/components/organisms/booksContainer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { searchApi } from '@src/apis';
import { getSearchResProp } from '@src/types/search';

export default function Search() {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState<getSearchResProp>();

  type QueryParams = {
    keyword: string | undefined;
    category: string | undefined;
  };

  const queryParams: QueryParams = {
    keyword: router.query.keyword as string | undefined,
    category: router.query.category as string | undefined,
  };

  const [keyword, setKeyWord] = useState<string | undefined>(queryParams.keyword);
  const [category, setCategory] = useState<string | undefined>();

  const getSearchResult = () => {
    searchApi.getSearchResult(keyword, category).then((res) => {
      setSearchResult(res);
      console.log('검색!', res);
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSearchResult();
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <>
      <PageTitle children="검색" />
      <S.Container>
        <S.SearchInput>
          <form onSubmit={handleOnSubmit}>
            <Input
              size="long"
              state="default"
              value={keyword}
              setInput={setKeyWord}
              placeholder={'검색어를 입력해주세요'}
            />
            <S.SearchBtn>
              <Icon name="search" />
            </S.SearchBtn>
          </form>
        </S.SearchInput>
      </S.Container>
      <BooksContainer type="book" page="search" title="도서" data={searchResult?.data.books.content} />
      <BooksContainer type="author" page="search" title="작가" data={searchResult?.data.authors.content} />
      <S.Footer />
    </>
  );
}
