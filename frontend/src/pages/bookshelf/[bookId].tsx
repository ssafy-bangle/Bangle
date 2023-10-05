import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/bookshelf/[bookId].styled';
import BookCover from '@src/components/atoms/bookCover';
import Munzibtn from '@src/components/molecules/munzibtn';
import { useEffect, useState } from 'react';
import { BookFilled, BookOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import Rating from '@src/components/atoms/rating';
import ReviewCard from '@src/components/atoms/reviewCard';
import Modal from '@src/components/molecules/modal';
import { bookApi } from '@src/apis';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { useRouter } from 'next/router';
import { BookInfo, reviewProps } from '@src/types/book';
import { BookInfoState } from '@src/modules/book';
import { AlertOpenState } from '@src/modules/state';

export default function BookId() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [bookInfo, setBookInfo] = useRecoilState(BookInfoState);
  const [isWish, setIsWish] = useState<boolean>(false);
  const [priceType, setPriceType] = useState<number>(0);
  const router = useRouter();
  const bookId = Number(router.query.bookId);
  const setIsAlertOpen = useSetRecoilState(AlertOpenState);

  const showModal = (type?: number) => {
    setIsOpen((pre) => !pre);
    if (type === 0) {
      setPriceType(0);
    } else if (type === 1) {
      setPriceType(1);
    }
  };

  const getBookInfoReq = (bookId: number) => {
    bookApi
      .getBookDetail(bookId)
      .then((response) => {
        console.log('get Detail', response);
        const res = response.data.bookDetail;
        const info: BookInfo = {
          bookId: res.id,
          address: res.address,
          averageScore: res.averageScore,
          cover: res.cover,
          genre: res.genre,
          introduction: res.introduction,
          purchasePrice: res.purchasePrice,
          rentalPrice: res.rentalPrice,
          title: res.title,
          authorId: res.authorId,
          nickname: res.nickname,
          publicationDate: res.publicationDate?.substring(0, res.publicationDate.indexOf('T')),
          reviews: response.data.reviews,
          buy: response.data.buy,
        };
        setBookInfo({ ...bookInfo, ...info });
        if (response.data.wish) {
          setIsWish(true);
        }
      })
      .catch(() => {
        setIsAlertOpen(true);
      });
  };

  useEffect(() => {
    if (!isNaN(bookId)) {
      getBookInfoReq(bookId);
    }
  }, [bookId]);

  const buyBookRequest = (id: number) => {
    const book = {
      bookId: id,
      orderStatus: priceType === 0 ? 'BUY' : 'RENT',
    };
    const body = {
      books: [book],
    };
    bookApi
      .buyBook(body)
      .then(() => {
        showModal();
        setUserInfo({ ...userInfo, dust: userInfo.dust });
        router.push('/bookshelf');
      })
      .catch(() => {
        setIsAlertOpen(true);
      });
    setIsOpen((pre) => !pre);
  };

  const setWishListHandler = () => {
    bookApi
      .wishBook(bookId)
      .then((res) => {
        console.log('wishlist', res);
        setIsWish((pre) => !pre);
      })
      .catch(() => {
        setIsAlertOpen(true);
      });
  };

  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        <S.InfoContainer>
          <BookCover size="big" imgsrc={bookInfo.cover} />
          <S.BookInfo>
            <S.TopInfoContainer>
              <S.BookTitle>{bookInfo.title}</S.BookTitle>
              {isWish ? <BookFilled onClick={setWishListHandler} /> : <BookOutlined onClick={setWishListHandler} />}
            </S.TopInfoContainer>
            <S.SmallInfo>
              <span onClick={() => router.push(`/authorpage/${bookInfo.authorId}`)} style={{ cursor: 'pointer' }}>
                {bookInfo.nickname}
              </span>{' '}
              · {bookInfo.publicationDate} · {bookInfo.genre}
            </S.SmallInfo>
            {bookInfo.buy == false && (
              <S.PriceContainer>
                <Munzibtn price={bookInfo.purchasePrice} content="구매하기" onClick={() => showModal(0)} />
                <Munzibtn price={bookInfo.rentalPrice} content="대여하기" onClick={() => showModal(1)} />
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  type={priceType === 0 ? 'dirBuy' : 'dirRent'}
                  title={bookInfo.title}
                  price={priceType === 0 ? bookInfo.purchasePrice : bookInfo.rentalPrice}
                  data={bookInfo}
                  onClick={() => {
                    buyBookRequest(bookInfo.bookId);
                    console.log('clicked');
                  }}
                />
              </S.PriceContainer>
            )}
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
          <Rating value={bookInfo.averageScore} label={true} editable={false} setInput={() => {}} />
          <S.CardContainer>
            {bookInfo.reviews.map((card: reviewProps) => (
              <>
                <S.ReviewCardItem imgsrc={card.cover} size="small" key={card.id} onClick={() => {}} />
              </>
            ))}
          </S.CardContainer>
        </S.ReviewContainer>
      </S.Container>
    </>
  );
}
