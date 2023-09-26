import InfoContent from '@src/components/organisms/infoContent';
import * as S from '@src/styles/pageStyles/info/index.styled';
import Image from 'next/image';
import { LogoBlackImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserInfoState, UserModeState } from '@src/modules/user';
import { userApi } from '@src/apis';

import React from 'react';
import Loading from '@src/components/atoms/loading';

export default function Info() {
  const router = useRouter();
  const id_token = router.query.id_token;
  const [showInfo, setShowInfo] = useState(true);
  const setUserInfo = useSetRecoilState(UserInfoState);
  const setMode = useSetRecoilState(UserModeState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  useEffect(() => {
    !loading && router.push(showInfo ? '/info' : '/home');
  }, [loading]);

  useEffect(() => {
    if (id_token) {
      const idToken = Array.isArray(id_token) ? id_token[0] : id_token;
      userApi.postLogin(idToken).then((res) => {
        const data = res.data;
        setUserInfo({ ...data.memberInformation });
        setMode(data.memberInformation.roles === 'ROLE_USER' ? 'user' : 'author');
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        setShowInfo(data.needPublicKey);
      });
    }
  }, [id_token]);

  return (
    <>
      <S.BgContainer>
        {loading ? (
          <S.LoadingContainer>
            <Loading content="회원 조회 중" />
          </S.LoadingContainer>
        ) : (
          showInfo && (
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
          )
        )}
      </S.BgContainer>
    </>
  );
}
