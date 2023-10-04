import { BannerImg, BookImg } from '@src/assets/imgs';
import Image from 'next/image';
import * as S from './index.styled';
import Button from '@src/components/atoms/button';
import Carousel from '@src/components/atoms/carousel';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { useEffect, useState } from 'react';
import { authorApi, bookApi } from '@src/apis';
import BooksContainer from '../booksContainer';

export default function UserHome() {
  const recoilUserInfo = useRecoilValue(UserInfoState);
  const [nickname, setNickname] = useState<string>('');
  const [subAuthorList, setSubAuthorList] = useState<{id: number, nickname: string}[]>([]);

  useEffect(() => {
    setNickname(recoilUserInfo.nickname);
    authorApi.getSubscribeAuthor().then((res) => {
      setSubAuthorList(() => [...res.data]);
    });
    // bookApi.getGenre();
  }, []);

  return (
    <>
      <S.BannerSection>
        <S.Title>
          오늘의 <strong>책</strong>
        </S.Title>
        <S.ContainerBox>
          <Image width={550} src={BannerImg} alt="bannerImg" quality={100} />
          <S.BookBox>
            <Image width={120} src={BookImg} alt="BookImg" />
            <Button length="long" content="구매하기" />
          </S.BookBox>
        </S.ContainerBox>
      </S.BannerSection>
      <S.RecommendSection>
        <S.Title>
          <strong>{nickname}</strong>님을 위한 <strong>맞춤</strong>추천
        </S.Title>
        <Carousel />
      </S.RecommendSection>
      <S.RecommendSection>
        <S.Title><strong>{nickname}</strong>님의 관심 작가 목록</S.Title>
        <BooksContainer type="author" page="bookShelf" data={subAuthorList} />
      </S.RecommendSection>
    </>
  );
}
