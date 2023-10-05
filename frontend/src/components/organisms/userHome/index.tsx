import { BannerImg, BookImg } from '@src/assets/imgs';
import Image from 'next/image';
import * as S from './index.styled';
import Button from '@src/components/atoms/button';
import Carousel from '@src/components/atoms/carousel';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import { useEffect, useState } from 'react';
import { authorApi, bookApi } from '@src/apis';
import BooksContainer from '../booksContainer';
import { AlertOpenState } from '@src/modules/state';
import { RecommendBook } from '@src/types/book';

export default function UserHome() {
  const recoilUserInfo = useRecoilValue(UserInfoState);
  const [nickname, setNickname] = useState<string>('');
  const [subAuthorList, setSubAuthorList] = useState<{ id: number; nickname: string }[]>([]);
  const setIsAlertOpen = useSetRecoilState(AlertOpenState);
  const [booksByGenre, setBooksByGenre] = useState<any>();
  const [booksByInterest, setBooksByInterest] = useState<any>();

  const getRandomMessage = (genre: string) => {
    const tmp = [
      `요즘 핫한 `,
      `놓치기 아까운 `,
      `최근 눈에 띄는 `,
      `인기 많은 `,
      `빠르게 팔리는 `,
      `이번 달 추천하는 `,
      `주목받는 `,
      `많이 찾고 있는 `,
      `새로운 `,
    ];
    return tmp[Math.floor(Math.random() * tmp.length)];
  };

  const getRandomEmozi = () => {
    const tmp = [`😜 `, `🙃 `, `😁 `, `😃 `, `😆 `, `🥰 `, `🤗 `];
    return tmp[Math.floor(Math.random() * tmp.length)];
  };

  useEffect(() => {
    console.log('booksByGenre', booksByGenre);
  }, [booksByGenre]);

  useEffect(() => {
    console.log('booksByInterest', booksByInterest);
  }, [booksByInterest]);

  useEffect(() => {
    setNickname(recoilUserInfo.nickname);
    authorApi
      .getSubscribeAuthor()
      .then((res) => {
        setSubAuthorList(() => [...res.data]);
      })
      .catch(() => {
        setIsAlertOpen(true);
      });

    bookApi
      .getRecommendBookByGenre()
      .then((res) => setBooksByGenre(res))
      .catch(() => {
        setIsAlertOpen(true);
      });

    bookApi
      .getBookByInterests()
      .then((res) => setBooksByInterest(Object.entries(res)))
      .catch(() => {
        setIsAlertOpen(true);
      });
  }, []);

  return (
    <>
      <S.BannerSection>
        <S.Title>
          오늘의 <strong>책</strong>
        </S.Title>
        <S.ContainerBox>
          <Image width={550} src={BannerImg} alt="bannerImg" quality={100} />
          <S.BookBox>
            <Image width={120} src={BookImg} alt="BookImg" />
            <Button length="long" content="구매하기" />
          </S.BookBox>
        </S.ContainerBox>
      </S.BannerSection>
      <S.RecommendSection>
        <S.Title>
          ❤️ <strong>{nickname}</strong>님을 위한 <strong>맞춤</strong>추천
        </S.Title>
        <Carousel data={booksByGenre} />
      </S.RecommendSection>
      {booksByInterest?.map(([key, arr]: [string, RecommendBook[]]) => (
        <S.RecommendSection>
          <S.Title>
            {getRandomEmozi()}
            {getRandomMessage(key)}
            <strong>{key}</strong>
          </S.Title>
          <Carousel data={arr} />
        </S.RecommendSection>
      ))}

      {subAuthorList.length > 0 && (
        <S.RecommendSection>
          <S.Title>
            <strong>{nickname}</strong>님의 관심 작가 목록
          </S.Title>
          <BooksContainer type="author" page="bookShelf" data={subAuthorList} />
        </S.RecommendSection>
      )}
    </>
  );
}
