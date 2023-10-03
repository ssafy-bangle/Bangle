import { CloseCircleOutlined } from '@ant-design/icons';
import * as S from './index.styled';
import Input from '@src/components/atoms/input';
import Icon from '@src/components/atoms/icon';
import { useState } from 'react';
import Chip from '@src/components/atoms/chip';
import { useRouter } from 'next/router';

// 최신순으로 3개만 불러오기
const recentLog = ['어느 날 싸피에 책 한 권이 날아왔다', '평범한 학생인', '상일이삼'];
const genreCategory = [{ '👻': '스릴러' }, { '💖': '로맨스' }, { '🎠': '판타지' }];

export default function SearchBar() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const router = useRouter();
  const handleOnSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: {
        keyword: keyword,
        category: category,
      },
    });
  };
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
                  <S.RecentItemContainer>
                    {recentLog.map((content: string) => (
                      <S.RecentItem>
                        <CloseCircleOutlined /> {content}
                      </S.RecentItem>
                    ))}
                  </S.RecentItemContainer>
                </S.RecentContainer>
                <S.Divider />
                <S.GenreContainer>
                  카테고리
                  <S.ChipsContainer>
                    {genreCategory.map((item: object, index: number) => (
                      <Chip
                        size="small"
                        icon={Object.keys(item)[0]}
                        title={Object.values(item)[0]}
                        key={index}
                        setValue={() => setCategory}
                      />
                    ))}
                  </S.ChipsContainer>
                </S.GenreContainer>
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
