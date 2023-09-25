import * as S from './index.styled';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { CartOpenState } from '@src/modules/state';
import Button from '@src/components/atoms/button';
import { CartBlackImg, DarkMunzi, TestBook } from '@src/assets/imgs';
import Checkbox from '@src/components/atoms/checkbox';
import Image from 'next/image';
import { CartBookProp } from '@src/types/props';
import CartItem from '@src/components/molecules/cartItem';

const onCartBooks: CartBookProp[] = [
  {
    id: 1,
    image: TestBook,
    title: '테스트 케이스',
    author: '작가이름',
    price: 5,
  },
  {
    id: 2,
    image: TestBook,
    title: '테스트 케이스',
    author: '작가이름',
    price: 5,
  },
  {
    id: 3,
    image: TestBook,
    title: '테스트 케이스',
    author: '작가이름',
    price: 5,
  },
  {
    id: 4,
    image: TestBook,
    title: '테스트 케이스',
    author: '작가이름',
    price: 5,
  },
];

export default function Cart() {
  const [open, setOpen] = useRecoilState(CartOpenState);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedBookList, setSelectedBookList] = useState<CartBookProp[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const onClose = () => {
    setOpen(false);
  };

  const selectProductHandler = (book: CartBookProp, checked: boolean) => {
    if (checked) {
      setSelectedBookList((prev) => [...prev, book]);
      setSelectedBookList((prev) => Array.from(new Set(prev)));
      setTotalPrice((pre) => pre + book.price);
    } else {
      setSelectedBookList((prev) => prev.filter((item) => item.id !== book.id));
      setTotalPrice((pre) => pre - book.price);
    }
  };

  useEffect(() => {
    console.log('list', selectedBookList);
  });

  const handleOnCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.StyledDrawer placement="right" onClose={onClose} open={open}>
      <S.Container>
        <S.Box>
          <S.Img src={CartBlackImg} width={20} alt="cartImg" />
          <S.Title>내가 담은 책들</S.Title>
        </S.Box>
        <form onSubmit={handleOnCart}>
          <Checkbox content="전체 선택" setInput={() => setIsClicked((pre) => !pre)} />
          <S.ListContainer>
            {/* 나중에 book prop 타입 생기면 적어야함 */}
            {onCartBooks.map((book: CartBookProp, index) => (
              <CartItem
                setChecked={selectProductHandler}
                key={index}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                image={book.image}
                checked={isClicked}
              />
            ))}
          </S.ListContainer>
          <S.InfoContainer>
            선택된 책
            <S.SelectedBooks>
              {selectedBookList.length > 0
                ? selectedBookList.map((book: CartBookProp, index: number) => (
                    <span key={index}>
                      {book.title}
                      {index < selectedBookList.length - 1 ? ' | ' : ''}
                    </span>
                  ))
                : '구매할 책을 선택해주세요'}
            </S.SelectedBooks>
            <S.TotalPrice>
              <span style={{ color: 'var(--BG_GRAY3)' }}>총</span> {totalPrice}{' '}
              <Image src={DarkMunzi} alt="munzi" width={26} />
            </S.TotalPrice>
          </S.InfoContainer>
          <Button length={'long'} content="구매하기" />
        </form>
      </S.Container>
    </S.StyledDrawer>
  );
}
