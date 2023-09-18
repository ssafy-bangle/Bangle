import PageTitle from '@src/components/atoms/pageTitle';
import * as S from './index.styled.';
import Input from '@src/components/atoms/input';
import Icon from '@src/components/atoms/icon';

export default function Search() {
  return (
    <>
      <PageTitle children="검색" />
      <S.Container>
        <S.SearchInput>
          <Input size="long" state="default" placeholder="검색어를 입력하세요" setInput={() => {}} />
          <S.SearchBtn
            onClick={() => {}}>
            <Icon name="search" />
          </S.SearchBtn>
        </S.SearchInput>
      </S.Container>
    </>
  );
}
