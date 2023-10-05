import { AlertProps } from '@src/types/props';
import { Button, Space } from 'antd';
import * as S from './index.styled';
import { useState } from 'react';
import { handleLogout } from '@src/utils/logout';
import { userApi } from '@src/apis';

export default function Alert({ state, onClick }: AlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const extendToken = () => {
    console.log('test', userApi.getAccessToken());
  };

  return (
    <S.ModalContainer>
      {isOpen && (
        <S.ModalBackDrop onClick={closeModalHandler}>
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
  );
}
