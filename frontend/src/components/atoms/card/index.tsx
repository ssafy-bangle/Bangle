import { HeartFilled, RightOutlined } from '@ant-design/icons';
import * as S from './index.styled';
import { CardProps } from '@src/types/props';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';
import {
  genre01,
  genre02,
  genre03,
  genre04,
  genre05,
  genre06,
  genre07,
  genre08,
  genre09,
  genre10,
  genre11,
  genre12,
} from '@src/assets/imgs';
import { useState } from 'react';

interface GenreList {
  [key: string]: StaticImageData;
}

export default function Card({ title, type, onClick, isSelected = false }: CardProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  const genreList: GenreList = {
    SF: genre01,
    인문: genre02,
    자기계발: genre03,
    로맨스: genre04,
    소설: genre05,
    건강: genre06,
    경제: genre07,
    무협: genre08,
    취미: genre09,
    어학: genre10,
    여행: genre11,
    금융: genre12,
  };

  const genreImageSrc = genreList[title];

  const onClickHandler = () => {
    type == 'author' ? router.push('/mypage') : setIsClicked((pre) => !pre);
    onClick(title);
  };
  return (
    <>
      <S.CardContainer type={type} title={title} onClick={onClickHandler} isSelected>
        <S.GenreImage src={genreImageSrc} alt="장르" />
        <S.BlackScreen isClicked={isClicked} />
        <S.Title>{isClicked ? <HeartFilled /> : title}</S.Title>
        {type == 'author' && (
          <S.Button
            onClick={() => {
              router.push('/mypage');
            }}>
            작가 홈 바로가기 <RightOutlined />
          </S.Button>
        )}
      </S.CardContainer>
    </>
  );
}
