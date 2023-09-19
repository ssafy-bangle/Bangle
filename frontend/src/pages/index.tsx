import Button from '@src/components/atoms/button';
import * as S from './index.styled';
import { LightImg, ShineImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';

export default function Landing() {
  const router = useRouter();
  const kakao_redirect = process.env.NEXT_PUBLIC_DOMAIN + "login/oauth2/code/kakao";
  const kakao_redirect_url = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c6c5b92bfb2099f919dedc2c24a91134&redirect_uri=" + kakao_redirect
  return (
    <>
      <S.Container>
        <S.ImgBox>
          <S.Light priority width={120} src={LightImg} alt={'light'} />
          <S.Shine priority width={360} src={ShineImg} alt={'shine'} />
        </S.ImgBox>
        <S.TitleContainer>
          <S.Title>방에서 쓴 글이</S.Title>
          <S.Title>모두의 블록 안으로</S.Title>
        </S.TitleContainer>
        <S.Content>
          혼자 가지고 있기엔 공유하고 싶고,
          <br />
          공유하기엔 과정이 부담스러웠던 원고.
          <br />
          작가와 독자가 직접 만날 수 있는 공간 '방글'
        </S.Content>
        <Button
          length="medium"
          size="big"
          content="시작하기"
          onClick={() =>
            router.push(kakao_redirect_url)
          }
        />
      </S.Container>
    </>
  );
}
