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
import Modal from '@src/components/molecules/modal';
import { bookApi } from '@src/apis';
import { useRouter } from 'next/router';
import { UserInfoState } from '@src/modules/user';
import { cookie } from '@src/utils/cookie';
import NoValue from '@src/components/atoms/noValue';

export default function Cart() {
  const [open, setOpen] = useRecoilState(CartOpenState);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectedBookList, setSelectedBookList] = useState<CartBookProp[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartBookProp[]>(cookie.onGet('cartItems') || []);

  useEffect(() => {
    console.log('cartItem 있나', cartItems);
    setCartItems((pre) => [...pre]);
  }, []);

  useEffect(() => {
    const storedCartItems = cookie.onGet('cartItems');
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const showModal = () => {
    setIsOpen((pre) => !pre);
  };

  const onClose = () => {
    setOpen((pre) => !pre);
  };

  const buyBookRequest = (selectedBookList: CartBookProp[]) => {
    const sortedSelectedBookList = selectedBookList.slice().sort((a, b) => a.id - b.id);
    const books = sortedSelectedBookList.map((book: CartBookProp) => ({
      bookId: book.id,
      orderStatus: 'BUY',
    }));
    const body = {
      books: books,
    };
    bookApi.buyBook(body).then(() => {
      onClose();
      showModal();
      setUserInfo({ ...userInfo, dust: userInfo.dust - totalPrice });
      router.push('/bookshelf');
    });
  };

  const selectProductHandler = (book: CartBookProp, checked: boolean) => {
    if (checked) {
      setSelectedBookList((prev) => [...prev, book]);
      setSelectedBookList((prev) => Array.from(new Set(prev)));
      setTotalPrice((prev) => prev + book.price);
    } else if (totalPrice > 0) {
      setSelectedBookList((prev) => prev.filter((item) => item.id !== book.id));
      setTotalPrice((prev) => prev - book.price);
    }
  };

  const totalCheckHandler = () => {
    setIsClicked((pre) => !pre);
  };

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
          <Checkbox
            content="전체 선택"
            setInput={totalCheckHandler}
            isChecked={cartItems.length === selectedBookList.length ? true : false}
          />
          <S.ListContainer>
            {cartItems.length == 0 ? (
              <S.ValueContainer>
                <NoValue type="cart" />
              </S.ValueContainer>
            ) : (
              cartItems.map((book: CartBookProp, index: number) => (
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
              ))
            )}
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
          <Button
            length={'long'}
            active={totalPrice > 0 ? true : false}
            content={`구매하기 (${totalPrice})`}
            onClick={showModal}
          />
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            type="buy"
            title={
              selectedBookList.length > 0
                ? selectedBookList.length > 1
                  ? `${selectedBookList[0].title} 외 ${selectedBookList.length - 1} 권`
                  : selectedBookList[0].title
                : ''
            }
            price={totalPrice}
            onClick={() => {
              buyBookRequest(selectedBookList);
              console.log('Buy!');
            }}
          />
        </form>
      </S.Container>
    </S.StyledDrawer>
  );
}
