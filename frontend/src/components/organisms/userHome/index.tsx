import { BannerImg, BookImg } from '@src/assets/imgs';
import Image from 'next/image';
import * as S from './index.styled';
import Button from '@src/components/atoms/button';
import Carousel from '@src/components/atoms/carousel';
import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { useEffect, useState } from 'react';
import { bookApi } from '@src/apis';

export default function UserHome() {
  const recoilUserInfo = useRecoilValue(UserInfoState);
  const [nickname, setNickname] = useState<string>('');
  useEffect(() => {
    setNickname(recoilUserInfo.nickname);
    // bookApi.getGenre();
  }, []);
  return (
    <>
      <S.BannerSection>
        <S.Title>
          오늘의 <strong>NFT</strong>
        </S.Title>
        <S.ContainerBox>
          <Image width={550} src={BannerImg} alt="bannerImg" />
          <S.BookBox>
            <Image width={120} src={BookImg} alt="BookImg" />
            <Button length="long" content="구매하기" />
          </S.BookBox>
        </S.ContainerBox>
      </S.BannerSection>
      <S.RecommendSection>
        <S.Title>
          <strong>{nickname}</strong>님을 위한 <strong>책</strong>추천
        </S.Title>
        <Carousel />
      </S.RecommendSection>
    </>
  );
}
