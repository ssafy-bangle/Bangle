import InfoContent from '@src/components/organisms/infoContent';
import * as S from '@src/styles/pageStyles/info/index.styled';
import Image from 'next/image';
import { LogoBlackImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { userApi } from '@src/apis';

export default function Info() {
  const router = useRouter();
  const id_token = router.query.id_token;
  const [showPage, setShowPage] = useState(false);
  const setUserInfo = useSetRecoilState(UserInfoState);

  useEffect(() => {
    if (id_token) {
      const idToken = Array.isArray(id_token) ? id_token[0] : id_token;
      userApi.postLogin(idToken).then((res) => {
        const data = res.data;
        setUserInfo({ ...data.memberInformation });
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        if (data.needPublicKey) {
          router.push('/info');
        } else {
          router.push('/home');
        }
      });
    } else {
      setShowPage(true);
    }
  }, [id_token]);

  return (
    <>
      {showPage && (
        <S.BgContainer>
          <S.Container>
            <Image src={LogoBlackImg} alt="logoBlackImg" width={30} />
            <S.Title>방글 시작하기</S.Title>
            <S.Content>
              방글에서 사용할 닉네임과, 비밀번호를 입력해주세요.
              <br />
              비밀번호를 저장하지 않으므로 분실시 찾을 수 없습니다.
            </S.Content>
            <InfoContent />
          </S.Container>
        </S.BgContainer>
      )}
    </>
  );
}
