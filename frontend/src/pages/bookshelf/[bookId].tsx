import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/bookshelf/[bookId].styled';
import BookCover from '@src/components/atoms/bookCover';
import Munzibtn from '@src/components/molecules/munzibtn';
import { useEffect, useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Rating from '@src/components/atoms/rating';
import ReviewCard from '@src/components/atoms/reviewCard';
import Modal from '@src/components/molecules/modal';
import { bookApi } from '@src/apis';
import { useRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { useRouter } from 'next/router';
import { BookInfo } from '@src/types/book';
import { BookInfoState } from '@src/modules/book';
import { TestBook } from '@src/assets/imgs';

export default function BookId() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [bookInfo, setBookInfo] = useRecoilState(BookInfoState);
  const router = useRouter();
  const bookId = Number(router.query.bookId);

  const showModal = () => {
    setIsOpen((pre) => !pre);
  };

  const getBookInfoReq = (bookId: number) => {
    bookApi.getBookDetail(bookId).then((response) => {
      console.log('get Detail', response);
      const res = response.data.bookDetail;
      console.log('data', res);
      const info: BookInfo = {
        bookId: res.id,
        address: res.address,
        averageScore: res.averageScore,
        cover: res.cover,
        genre: res.genre,
        introduction: response.msg,
        purchasePrice: res.purchasePrice,
        rentalPrice: res.rentalPrice,
        title: res.title,
        nickname: res.nickname,
        reviews: response.data.reviews,
        buy: response.data.buy,
      };
      setBookInfo({ ...bookInfo, ...info });
    });
  };

  useEffect(() => {
    getBookInfoReq(bookId);
  }, []);

  const buyBookRequest = (id: number) => {
    const book = {
      bookId: id,
      orderStatus: 'BUY',
    };
    const body = {
      books: [book],
    };
    bookApi.buyBook(body).then(() => {
      showModal();
      setUserInfo({ ...userInfo, dust: userInfo.dust });
      router.push('/bookshelf');
    });
  };

  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        <S.InfoContainer>
          <BookCover size="big" imgsrc={TestBook} />
          <S.BookInfo>
            <S.BookTitle>{bookInfo.title}</S.BookTitle>
            <S.SmallInfo>
              {bookInfo.nickname} · 2023.09.13 · {bookInfo.genre}
            </S.SmallInfo>
            <S.PriceContainer>
              <Munzibtn price={bookInfo.purchasePrice} content="구매하기" onClick={showModal} />
              <Munzibtn price={bookInfo.rentalPrice} content="대여하기" onClick={showModal} />
              <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                type="buy"
                title={'제목'}
                price={bookInfo.purchasePrice}
                onClick={() => {
                  buyBookRequest(bookInfo.bookId);
                  console.log('clicked');
                }}
              />
            </S.PriceContainer>
            <S.InfoText>
              <S.InfoTitle>소개</S.InfoTitle>
              <S.InfoContent isClicked={isClicked}>{bookInfo.introduction}</S.InfoContent>
              <S.MoreInfoBtn onClick={() => setIsClicked((pre) => !pre)}>
                {isClicked ? (
                  <UpOutlined style={{ marginRight: '0.8rem' }} />
                ) : (
                  <DownOutlined style={{ marginRight: '0.8rem' }} />
                )}
                더보기
              </S.MoreInfoBtn>
            </S.InfoText>
          </S.BookInfo>
        </S.InfoContainer>
        <S.ReviewContainer>
          <S.InfoTitle>리뷰</S.InfoTitle>
          <Rating value={4} label={true} editable={false} setInput={() => {}} />
          <S.CardContainer>
            {/* {bookInfo.reviews.map((card: number) => (
              <ReviewCard imgsrc={TestBook} size="small" />
            ))} */}
          </S.CardContainer>
        </S.ReviewContainer>
      </S.Container>
    </>
  );
}
