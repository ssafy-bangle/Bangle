import { authorApi } from '@src/apis';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/authorpage/[authorId].styled';
import { authorInfo, bookListProp } from '@src/types/author';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AuthorId() {
  const [authorInfo, setAuthorInfo] = useState<authorInfo>();
  const router = useRouter();
  const authorId = Number(router.query.authorId);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const getAuthorInfoReq = (authorId: number) => {
    authorApi.getAuthorInfo(authorId).then((res) => {
      console.log('get Detail', res);
      const data = {
        bookList: res.data.bookList,
        follower: res.data.follower,
        introduction: res.data.introduction,
        isFollow: res.data.isFollow,
        nickname: res.data.nickname,
      };
      setAuthorInfo(data);
    });
  };

  useEffect(() => {
    if (!isNaN(authorId)) {
      getAuthorInfoReq(authorId);
    }
  }, [authorId]);

  useEffect(() => {
    if (authorInfo?.isFollow) {
      setIsClicked(true);
    }
  }, [authorInfo]);

  const subscribeHandler = () => {
    authorApi.subscribeAuthor(authorId).then((res) => {
      setIsClicked((pre) => !pre);
    });
  };

  return (
    <>
      <S.Container>
        <PageTitle>작가페이지</PageTitle>
        <S.SectionContainer>
          <S.LeftSection>
            <S.PartTitle>작가 정보</S.PartTitle>
            <S.MainInfo>
              <strong>{authorInfo?.nickname} 작가</strong>
            </S.MainInfo>
            <S.AuthorInfo>{authorInfo?.introduction}</S.AuthorInfo>
            <Button
              length="medium"
              content={isClicked ? '작가 저장 취소' : '내 작가로 저장'}
              icon={isClicked ? 'thumb-solid' : 'thumb-line'}
              onClick={subscribeHandler}
            />
          </S.LeftSection>
          <S.RightSection>
            <S.PartTitle>작가의 책장</S.PartTitle>
            <S.MainInfo style={{ color: 'var(--BG_GRAY3)' }}>
              총 {authorInfo?.bookList.length}권의 책이 있습니다.
            </S.MainInfo>
            <S.BookShelf>
              {authorInfo?.bookList.map((book: bookListProp) => (
                <BookCover imgsrc={book.cover} onClick={() => router.push(`/bookshelf/${book.id}`)} key={book.id} />
              ))}
            </S.BookShelf>
          </S.RightSection>
        </S.SectionContainer>
      </S.Container>
    </>
  );
}
