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

export default function Modal({ isOpen, setIsOpen, type, title, price, onClick }: ModalProps) {
  // get user info
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  const router = useRouter();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  // 충전 먼지 즉시 이후 user 업데이트
  const chargeDustImmediately = () => {
    if (price) {
      paymentAPI.postPayment(price).then(() => {
        setUserInfo({ ...userInfo });
      });
    }
  };

  const buttonType = (type: string) => {
    switch (type) {
      case 'publish':
        if (userInfo.dust < price) {
          return <Button theme="text" content={`즉시 충전(${price})`} length="long" onClick={chargeDustImmediately} />;
        } else {
          return null;
        }
      case 'buy':
        if (userInfo.dust < price) {
          return <Button theme="text" content={`즉시 충전(${price})`} length="long" onClick={chargeDustImmediately} />;
        } else {
          return null;
        }
      case 'munzi':
        return <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={() => {}} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <>
      <S.ModalContainer>
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
                    <S.MunziPrice>{price}</S.MunziPrice>
                  </S.PriceContainer>
                </S.FirstMunzi>
              </S.MunziContainer>
              <S.Divider />
              <S.ButtonContainer>
                {buttonType(type)}
                <Button
                  active={userInfo.dust >= price ? true : false}
                  theme="default"
                  content={type == 'publish' ? `출판하기(${price}먼지)` : `즉시구매(${price}먼지)`}
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
