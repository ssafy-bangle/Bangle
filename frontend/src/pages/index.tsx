import Button from '@src/components/atoms/button';
import * as S from './index.styled';
import { LightImg, ShineImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';

export default function Landing() {
  const router = useRouter();
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
          설명 길게 주저리 주저리 포인트는 감성을 담아서 <br /> 열심히 적어보면 아주 좋을 것 같습니다. <br />
          저는 감성이 없어서 항상 이런 식으로 미루는 걸 좋아해요 ㅎㅎ
        </S.Content>
        <Button length="short" size="small" content="시작하기" onClick={() => router.push('/home')} />
      </S.Container>
    </>
  );
}
