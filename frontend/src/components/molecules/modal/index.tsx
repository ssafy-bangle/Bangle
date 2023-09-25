import * as S from './index.styled';
import { useState, useEffect } from 'react';
import { ModalProps } from '@src/types/props';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';
import Button from '@src/components/atoms/button';
import { useRouter } from 'next/router';
import paymentAPI from '@src/apis/payment';
import { useRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';

export default function Modal({ type, title, publishPrice, onClick }: ModalProps) {
  // get user info
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  // 충전 먼지 즉시 이후 user 업데이트
  const chargeDustImmediately = () => {
    if (publishPrice) {
      paymentAPI.postPayment(publishPrice).then(() => {
        setUserInfo({ ...userInfo })
      });
    }
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <>
      <S.ModalContainer>
        <Button length={'long'} content={'다음'} onClick={showModal} />
        {isOpen ? (
          <S.ModalBackDrop onClick={openModalHandler}>
            <S.StyledContainer onClick={(e) => e.stopPropagation()}>
              <S.StyledTitle>{title}</S.StyledTitle>
              <S.Divider />
              <S.MunziContainer>
                <S.FirstMunzi>
                  보유먼지
                  <S.PriceContainer>
                    <Image src={DarkMunzi} alt="다크먼지" width={30} />
                    <S.MunziPrice>{userInfo.dust}</S.MunziPrice>
                  </S.PriceContainer>
                </S.FirstMunzi>
                <S.FirstMunzi>
                  {type == 'publish' ? '출판먼지' : '구매먼지'}
                  <S.PriceContainer>
                    <Image src={DarkMunzi} alt="다크먼지" width={30} />
                    <S.MunziPrice>{publishPrice}</S.MunziPrice>
                  </S.PriceContainer>
                </S.FirstMunzi>
              </S.MunziContainer>
              <S.Divider />
              <S.ButtonContainer>
                {type == 'publish' ? (
                  <Button
                    theme="text"
                    content={`즉시 충전(${publishPrice})`}
                    length="long"
                    onClick={chargeDustImmediately}
                  />
                ) : (
                  <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={() => {}} />
                )}
                <Button
                  theme="default"
                  content={type == 'publish' ? `출판하기(${publishPrice}먼지)` : `즉시구매(${publishPrice}먼지)`}
                  length="long"
                  onClick={onClick}
                />
              </S.ButtonContainer>
            </S.StyledContainer>
          </S.ModalBackDrop>
        ) : null}
      </S.ModalContainer>
    </>
  );
}
