import * as S from './index.styled';
import { useState, useEffect } from 'react';
import { CartBookProp } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';
import Checkbox from '@src/components/atoms/checkbox';
import { CloseOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';

export default function CartItem({ setChecked, checked, id, image, title, author, price }: CartBookProp) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const book = {
      id: id,
      image: image,
      title: title,
      author: author,
      price: price,
    };
    setChecked(book, isChecked);
  }, [isChecked]);

  useEffect(() => {
    console.log('aaa', checked)
    if (checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    console.log('check', isChecked)
  }, [checked]);

  return (
    <S.TotalItemContainer>
      <Checkbox content={''} setInput={setIsChecked} />
      <S.CartItemContainer>
        {/* <BookCover imgSrc={image} /> */}
        <BookCover imgsrc={image} />
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
