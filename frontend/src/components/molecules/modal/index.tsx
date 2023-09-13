import * as S from './index.styled';
import { useState } from 'react';
import { ModalProps } from '@src/types/props';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';
import Button from '@src/components/atoms/button';
import { useRouter } from 'next/router';

export default function Modal({ type, title, firstPrice, secondPrice }: ModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

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
                    <S.MunziPrice>{firstPrice}</S.MunziPrice>
                  </S.PriceContainer>
                </S.FirstMunzi>
                <S.FirstMunzi>
                  {type == 'publish' ? '출판먼지' : '구매먼지'}
                  <S.PriceContainer>
                    <Image src={DarkMunzi} alt="다크먼지" width={30} />
                    <S.MunziPrice>{secondPrice}</S.MunziPrice>
                  </S.PriceContainer>
                </S.FirstMunzi>
              </S.MunziContainer>
              <S.Divider />
              <S.ButtonContainer>
                {type == 'publish' ?
                <Button theme="text" content={`즉시 충전(${secondPrice})`} length="long" onClick={() => {}} />
                :
                <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={() => {}} />
              }
                <Button theme="default" content={type == 'publish' ? `출판하기(${secondPrice}먼지)` : `즉시구매(${secondPrice}먼지)` } length="long" onClick={() => router.push('/')} />
              </S.ButtonContainer>
            </S.StyledContainer>
          </S.ModalBackDrop>
        ) : null}
      </S.ModalContainer>
    </>
  );
}
