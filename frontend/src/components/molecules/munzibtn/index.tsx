import * as S from './index.styled';
import { MunziBtnProps } from '@src/types/props';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';

export default function Munzibtn({ price, content, onClick }: MunziBtnProps) {
  return (
    <>
      <S.MunziBtn onClick={onClick}>
        <S.TextBox>
          <Image src={DarkMunzi} alt="다크먼지" width={30} />
          <S.MunziPrice>{price} 먼지</S.MunziPrice>
        </S.TextBox>
        <S.Purchase>{content}</S.Purchase>
      </S.MunziBtn>
    </>
  );
}
