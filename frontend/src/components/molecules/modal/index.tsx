import * as S from './index.styled';
import { useState } from 'react';
import { ModalProps } from '@src/types/props';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';
import Button from '@src/components/atoms/button';
import { useRouter } from 'next/router';

export default function Modal({ open, type, title, firstPrice, secondPrice, onClick }: ModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  // const handleOk = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   setIsOpen(false);
  // };

  // const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   setIsOpen(false);
  // };

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
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
                  구매먼지
                  <S.PriceContainer>
                    <Image src={DarkMunzi} alt="다크먼지" width={30} />
                    <S.MunziPrice>{secondPrice}</S.MunziPrice>
                  </S.PriceContainer>
                </S.FirstMunzi>
              </S.MunziContainer>
              <S.Divider />
              <S.ButtonContainer>
                <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={() => {}} />
                <Button theme="default" content="즉시구매(10먼지)" length="long" onClick={() => router.push('/')} />
              </S.ButtonContainer>
            </S.StyledContainer>
          </S.ModalBackDrop>
        ) : null}
      </S.ModalContainer>
      {/* <S.StyledModal
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        modalRender={() => (
          <S.StyledContainer>
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
                구매먼지
                <S.PriceContainer>
                  <Image src={DarkMunzi} alt="다크먼지" width={30} />
                  <S.MunziPrice>{secondPrice}</S.MunziPrice>
                </S.PriceContainer>
              </S.FirstMunzi>
            </S.MunziContainer>
            <S.Divider />
            <S.ButtonContainer>
              <Button theme="text" content="장바구니 담기" icon="cart" length="long" onClick={() => {}} />
              <Button theme="default" content="즉시구매(10먼지)" length="long" onClick={() => router.push('/')} />
            </S.ButtonContainer>
          </S.StyledContainer>
        )}></S.StyledModal> */}
    </>
  );
}
