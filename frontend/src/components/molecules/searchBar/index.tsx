import { CloseCircleOutlined } from '@ant-design/icons';
import * as S from './index.styled';
import Input from '@src/components/atoms/input';
import Icon from '@src/components/atoms/icon';
import { useEffect, useState } from 'react';
import Chip from '@src/components/atoms/chip';
import { useRouter } from 'next/router';
import { cookie } from '@src/utils/cookie';

const genreCategory = [{ '👻': '스릴러' }, { '💖': '로맨스' }, { '🎠': '판타지' }];

export default function SearchBar() {
  const [recentSearch, setRecentSearch] = useState<string[]>(cookie.onGet('recentSearch') || []);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const router = useRouter();
  const handleOnSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    keyword !== '' && setRecentSearch((pre) => [...pre, keyword]);
    router.push({
      pathname: '/search',
      query: {
        keyword: keyword,
        category: category,
      },
    });
    setKeyword('');
  };

  useEffect(() => {
    if (recentSearch) {
      cookie.onSet('recentSearch', [...recentSearch]);
    }
  }, [recentSearch]);

  return (
    <>
      <S.Container>
        {isHover ? (
          <form onMouseLeave={() => setIsHover((pre) => !pre)} onSubmit={handleOnSearch}>
            <S.InputStyle>
              <S.SearchInput>
                <Input size="long" state="default" placeholder="검색어를 입력하세요" setInput={setKeyword} />
                <S.SearchBtn>
                  <Icon name="search" />
                </S.SearchBtn>
              </S.SearchInput>
              <S.SearchLogContainer>
                <S.RecentContainer>
                  최근 검색
                  <S.Divider />
                  <S.RecentItemContainer>
                    {recentSearch.slice(-2).map((content: string, idx: number) => (
                      <S.RecentItem key={idx}>
                        <CloseCircleOutlined /> {content}
                      </S.RecentItem>
                    ))}
                  </S.RecentItemContainer>
                </S.RecentContainer>

                {/* <S.GenreContainer>
                  카테고리
                  <S.ChipsContainer>
                    {genreCategory.map((item: object, idx: number) => (
                      <Chip
                        size="small"
                        icon={Object.keys(item)[0]}
                        title={Object.values(item)[0]}
                        key={idx}
                        setValue={() => setCategory}
                      />
                    ))}
                  </S.ChipsContainer>
                </S.GenreContainer> */}
              </S.SearchLogContainer>
            </S.InputStyle>
          </form>
        ) : (
          <S.SearchIcon onMouseEnter={() => setIsHover((pre) => !pre)}>
            <Icon name="search" />
          </S.SearchIcon>
        )}
      </S.Container>
    </>
  );
}
