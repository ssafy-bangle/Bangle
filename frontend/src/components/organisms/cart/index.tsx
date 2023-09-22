import * as S from './index.styled';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { CartOpenState } from '@src/modules/state';
import Button from '@src/components/atoms/button';
import { CartBlackImg, DarkMunzi, TestBook } from '@src/assets/imgs';
import Checkbox from '@src/components/atoms/checkbox';
import Image, { StaticImageData } from 'next/image';
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
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);
  const [selectedBookList, setSelectedBookList] = useState<CartBookProp[]>([]);
  const totalPrice = 0;

  const onClose = () => {
    setOpen(false);
  };

  const handleOnCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    // console.log('check', isCheckedList);
    // if (isChecked) {
    //   selected 배열에 추가
    //   const updatedList = [...selectedBookList, newItem];
    //   setSelectedBookList(updatedList);
    //   totalPrice += book.price
    // } else {
    //   selected 배열에서 삭제
    //   setSelectedBookList(selectedBookList.filter((el) => el !== item));
    // }
  }, []);

  return (
    <S.StyledDrawer placement="right" onClose={onClose} open={open}>
      <S.Container>
        <S.Box>
          <S.Img src={CartBlackImg} width={20} alt="cartImg" />
          <S.Title>내가 담은 책들</S.Title>
        </S.Box>
        <form onSubmit={handleOnCart}>
          <Checkbox content="전체 선택" setInput={() => {}} />
          <S.ListContainer>
            {/* 나중에 book prop 타입 생기면 적어야함 */}
            {onCartBooks.map((book, index) => (
              <CartItem setInput={() => isChecked} key={index} id={book.id} title={book.title} author={book.author} price={book.price} image={book.image} />
            ))}
          </S.ListContainer>
          <S.InfoContainer>
            선택된 책
            {selectedBookList.length !== 0 ? (
              selectedBookList.map((book: CartBookProp) => <S.SelectedBooks>{book.title} |</S.SelectedBooks>)
            ) : (
              <S.SelectedBooks>구매할 책을 선택해주세요</S.SelectedBooks>
            )}
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
