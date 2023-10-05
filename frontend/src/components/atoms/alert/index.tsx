import { AlertProps } from '@src/types/props';
import { Button, Space } from 'antd';
import * as S from './index.styled';
import { UserInfoState } from '@src/modules/user';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userApi } from '@src/apis';
import { useRouter } from 'next/router';
import { AlertOpenState } from '@src/modules/state';

export default function Alert({ state, message }: AlertProps) {
  const router = useRouter();
  const setUserInfo = useSetRecoilState(UserInfoState);
  const [isOpenAlert, setIsOpenAlert] = useRecoilState(AlertOpenState);

  const extendToken = () => {
    userApi
      .getAccessToken()
      .then((res) => (localStorage.setItem('accessToken', res.data['access-token']), setIsOpenAlert(false)));
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUserInfo({
      nickname: '',
      dust: 0,
      email: '',
      roles: 'ROLE_USER',
      userId: '',
    });
    setIsOpenAlert(false);
    router.push('/');
  };

  return (
    <>
      {state === 'info' && (
        <S.ModalContainer>
          {isOpenAlert && (
            <S.ModalBackDrop>
              <S.StyledAlert
                message="충전완료"
                showIcon
                description={message}
                type="warning"
                action={
                  <Button size="small" ghost>
                    확인
                  </Button>
                }
              />
            </S.ModalBackDrop>
          )}
        </S.ModalContainer>
      )}

      {state === 'error' && (
        <S.ModalContainer>
          {isOpenAlert && (
            <S.ModalBackDrop>
              <S.StyledAlert
                message="토큰 만료"
                description="토큰이 만료되었습니다."
                type="error"
                action={
                  <Space direction="vertical">
                    <Button size="small" type="primary" danger onClick={extendToken}>
                      연장하기
                    </Button>
                    <Button size="small" danger ghost onClick={handleLogout}>
                      로그아웃
                    </Button>
                  </Space>
                }
              />
            </S.ModalBackDrop>
          )}
        </S.ModalContainer>
      )}
    </>
  );
}
