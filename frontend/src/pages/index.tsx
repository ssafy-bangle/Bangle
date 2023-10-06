import Button from '@src/components/atoms/button';
import * as S from '@src/styles/pageStyles/index/index.styled';
import { TotalImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';

export default function Landing() {
  const router = useRouter();
  const kakao_redirect = process.env.NEXT_PUBLIC_DOMAIN + 'login/oauth2/code/kakao';
  const kakao_redirect_url =
    'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c6c5b92bfb2099f919dedc2c24a91134&redirect_uri=' +
    kakao_redirect;
  return (
    <>
      <S.Container>
        <S.ImgBox>
          <S.Shine priority width={360} src={TotalImg} alt={'shine'} />
        </S.ImgBox>
        <S.Content>
          독립출판물을 위한 전자 서점 방글에서는
          <br />
          방에서 쓴 내 글을 독자의 방으로 쉽게 공유할 수 있습니다.
          <br />
          작가와 독자가 직접 만날 수 있는 방글을 시작해보세요.
        </S.Content>
        <Button length="medium" size="big" content="시작하기" onClick={() => router.push(kakao_redirect_url)} />
      </S.Container>
    </>
  );
}
