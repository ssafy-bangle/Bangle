import InfoContent from '@src/components/organisms/infoContent';
import * as S from './index.styled';
import Image from 'next/image';
import { LogoBlackImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';
export default function Info() {
  return (
    <S.BgContainer>
      <S.Container>
        <Image src={LogoBlackImg} alt="logoBlackImg" width={30} />
        <S.Title>방글 시작하기</S.Title>
        <S.Content>
          거의 다왔어요! 개인 지갑을 만들기 위한 비밀번호와 <br />
          방글에서 사용할 닉네임을 입력해주세요. <br />
          비밀번호는 저장되지 않기 때문에 분실 시 찾을 수 없습니다
        </S.Content>
        <InfoContent />
      </S.Container>
    </S.BgContainer>
  );
}
