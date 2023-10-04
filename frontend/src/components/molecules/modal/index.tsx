import * as S from './index.styled';
import { useState, useEffect } from 'react';
import { CartBookProp, ModalProps } from '@src/types/props';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';
import Button from '@src/components/atoms/button';
import { useRouter } from 'next/router';
import paymentAPI from '@src/apis/payment';
import { useRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { cookie } from '@src/utils/cookie';


export default function Modal({ data, isOpen, setIsOpen, type, title, price, onClick }: ModalProps) {
  // get user info
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [cartItem, setCartItem] = useState<CartBookProp[]>(cookie.onGet('cartItems') || []);
  const router = useRouter();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  // 충전 먼지 즉시 이후 user 업데이트
  const chargeDustImmediately = () => {
    if (price) {
      paymentAPI.postPayment(price).then(() => {
        setUserInfo({ ...userInfo, dust: userInfo.dust + price });
      });
    }
    openModalHandler();
  };

  // 충전 먼지 즉시 이후 user 업데이트
  const addBooksOnCart = () => {
    if (data) {
      const cartData: CartBookProp = {
        id: data.bookId,
        image: data.cover,
        title: data.title,
        author: data.nickname,
        price: data.purchasePrice,
        checked: false,
      }
      setCartItem((pre) => [...pre, cartData])
    }
    openModalHandler();
    cookie.onSet('cartItems', [...cartItem]);
    alert('장바구니에 책이 담겼습니다');
    router.push('/home');
  };

  useEffect(() => {
    if (cartItem) {
      cookie.onSet('cartItems', [...cartItem]);
    }
    console.log('cookie', cartItem)
  }, [cartItem])

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
      case 'dirBuy':
        return <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={addBooksOnCart} />;
      case 'dirRent':
        return <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={addBooksOnCart} />;
      default:
        return null;
    }
  };

  const buttonContent = (type: string) => {
    switch (type) {
      case 'publish':
        return `출판하기(${price}먼지)`;
      case 'dirRent':
        return `즉시대여(${price}먼지)`;
      default:
        return `즉시구매(${price}먼지)`;
    }
  };

  const munziContent = (type: string) => {
    switch (type) {
      case 'publish':
        return `출판먼지`;
      case 'dirRent':
        return `대여먼지`;
      default:
        return `구매먼지`;
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
                  {munziContent(type)}
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
                  content={buttonContent(type)}
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
