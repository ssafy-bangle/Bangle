import InfoContent from '@src/components/organisms/infoContent';
import * as S from '@src/styles/pageStyles/info/index.styled';
import Image from 'next/image';
import { LogoBlackImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import loginApi from '@src/apis/login';

export default function Info() {
  const router = useRouter();
  const queryParams = router.query.params;
  const [showPage, setShowPage] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  console.log(router.query.id_token);
  useEffect(() => {
    if (router.query.id_token) {
      const idToken = Array.isArray(router.query.id_token) ? router.query.id_token[0] : router.query.id_token;
      console.log('idToken: ', idToken);
      loginApi.postOidcLogin(idToken).then((res) => {
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
  }, [router.query.id_token]);

  return (
    <>
      showPage &&
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
    </>
  );
}
