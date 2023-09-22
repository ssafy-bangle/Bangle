import * as S from './index.styled';
import { useState } from 'react';
import { CartBookProp } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';
import Checkbox from '@src/components/atoms/checkbox';
import { CloseOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';

export default function CartItem({ setInput, image, title, author, price }: CartBookProp) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <S.TotalItemContainer onChange={() => setInput}>
      <Checkbox content="" setInput={() => setIsChecked((pre) => !pre)} />
      <S.CartItemContainer>
        <BookCover imgSrc={image} />
        <S.TextItemContainer>
          <S.BookTitle>{title}</S.BookTitle>
          <S.Author>{author}</S.Author>
          <S.Price>
            <Image src={DarkMunzi} alt="munzi" width={26} />
            <CloseOutlined />
            {price}
          </S.Price>
        </S.TextItemContainer>
      </S.CartItemContainer>
    </S.TotalItemContainer>
  );
}
