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
import { useRouter } from 'next/router';

export default function UserHome() {
  const recoilUserInfo = useRecoilValue(UserInfoState);
  const [nickname, setNickname] = useState<string>('');
  const [subAuthorList, setSubAuthorList] = useState<{ id: number; nickname: string }[]>([]);
  const setIsAlertOpen = useSetRecoilState(AlertOpenState);
  const [booksByGenre, setBooksByGenre] = useState<any>();
  const [booksByInterest, setBooksByInterest] = useState<any>();
  const router = useRouter();

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
          <S.BannerContainer onClick={() => router.push('/bookshelf/80')}>
            <S.ImageBanner src={BannerImg} alt="bannerImg" width={1000} />
            <S.InnerBox>
              <S.ContentsBox>
                <S.BannerTitle>
                  필리핀 말린 망고보다
                  <br />
                  도움되는 유탁의 여행기
                </S.BannerTitle>
                <S.BannerContent>
                  초등학교 3학년, 나는 필리핀에 가면 다 영어를 잘하는 줄 알았다.
                  <br />
                  하지만 세상에 저절로 얻어지는 것은 없다는 걸 배우게 되었다.
                  <br />
                  필리핀 여행에서 얻은 깨달음을 전하는 유탁 작가의 신작을 확인해보세요! →
                </S.BannerContent>
              </S.ContentsBox>
              <Image src={BookImg} alt="bannerImg" width={160} />
            </S.InnerBox>
          </S.BannerContainer>
        </S.ContainerBox>
      </S.BannerSection>
      {booksByGenre?.length > 0 ? (
        <S.RecommendSection>
          <S.Title>
            ❤️ <strong>{nickname}</strong>님을 위한 <strong>맞춤</strong>추천
          </S.Title>
          <Carousel data={booksByGenre} />
        </S.RecommendSection>
      ) : null}
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
