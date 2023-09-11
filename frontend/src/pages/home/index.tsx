import { BannerImg, BookImg, RecommendImg } from '@src/assets/imgs';
import Image from 'next/image';
import * as S from './index.styled';
import Button from '@src/components/atoms/button';

export default function Home() {
  return (
    <>
      <S.Container>
        <S.BannerSection>
          <S.Title>
            오늘의 <strong>NFT</strong>
          </S.Title>
          <S.ContainerBox>
            <Image width={550} src={BannerImg} alt="bannerImg" />
            <S.BookBox>
              <Image width={150} src={BookImg} alt="BookImg" />
              <Button length="long" size="small" content="구매하기" />
            </S.BookBox>
          </S.ContainerBox>
        </S.BannerSection>
        <S.RecommendSection>
          <S.Title>
            <strong>방글이</strong>님을 위한 <strong>책</strong>추천
          </S.Title>
          <S.BooksBox>
            <Image src={RecommendImg} alt="recommendImg" />
          </S.BooksBox>
        </S.RecommendSection>
      </S.Container>
    </>
  );
}
