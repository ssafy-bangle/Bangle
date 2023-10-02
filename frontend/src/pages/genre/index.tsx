import Button from '@src/components/atoms/button';
import Card from '@src/components/atoms/card';
import { UserInfoState } from '@src/modules/user';
import * as S from '@src/styles/pageStyles/genre/index.styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function Genre() {
  const recoilUserInfo = useRecoilValue(UserInfoState);
  const [nickname, setNickname] = useState<string>('');
  const router = useRouter();
  const [genreSelected, setGenreSelected] = useState<string[]>([]);
  const genreList = [
    'SF',
    '인문',
    '자기계발',
    '로맨스',
    '소설',
    '건강',
    '경제',
    '무협',
    '취미',
    '어학',
    '여행',
    '금융',
  ];
  useEffect(() => {
    setNickname(recoilUserInfo.nickname);
  }, []);

  useEffect(() => {
    console.log('genre', genreSelected);
  }, [genreSelected]);

  const toggleGenre = (selectedGenre: string) => {
    if (genreSelected.includes(selectedGenre)) {
      setGenreSelected((prevSelected) => prevSelected.filter((genre) => genre !== selectedGenre));
    } else {
      setGenreSelected((prevSelected) => [...prevSelected, selectedGenre]);
    }
  };

  return (
    <>
      <S.Container>
        <S.MainTitle>{nickname}님, 좋아하는 책 장르를 알려주세요</S.MainTitle>
        <S.SubTitle>선택해주신 장르에 맞춰 추천 도서를 보여드립니다.</S.SubTitle>
        <S.CardsContainer>
          {genreList.map((genre: string) => (
            <Card
              key={genre}
              type="genre"
              title={genre}
              selected={genreSelected.includes(genre)}
              onClick={() => toggleGenre(genre)}
            />
          ))}
        </S.CardsContainer>
        <S.NextButton>
          <Button content="다음" length="long" active={genreSelected.length > 0} onClick={() => router.push('/home')} />
        </S.NextButton>
      </S.Container>
    </>
  );
}
