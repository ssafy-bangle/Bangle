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
          방글에서 사용할 닉네임과, 비밀번호를 입력해주세요.<br />
          비밀번호를 저장하지 않으므로 분실시 찾을 수 없습니다.
        </S.Content>
        <InfoContent />
      </S.Container>
    </S.BgContainer>
  );
}
