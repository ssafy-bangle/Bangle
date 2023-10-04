import { authorApi } from '@src/apis';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';
import * as S from '@src/styles/pageStyles/author/[authorId].styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AuthorId() {
  const [authorInfo, setAuthorInfo] = useState();
  const router = useRouter();
  const authorId = Number(router.query.authorId);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const getAuthorInfoReq = (authorId: number) => {
    authorApi.getAuthorInfo(authorId).then((res) => {
      console.log('get Detail', res);
      setAuthorInfo(res);
    });
  };

  useEffect(() => {
    if (!isNaN(authorId)) {
      getAuthorInfoReq(authorId);
    }
  }, [authorId]);

  const subscribeHandler = () => {
    authorApi.subscribeAuthor(authorId).then((res) => {
      console.log('subscribe', res);
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
              <strong> 작가</strong>
            </S.MainInfo>
            <S.AuthorInfo>작가소개</S.AuthorInfo>
            <Button
              length="medium"
              content={isClicked ? '작가 저장 취소' : '내 작가로 저장'}
              icon={isClicked ? 'thumb-solid' : 'thumb-line'}
              onClick={subscribeHandler}
            />
          </S.LeftSection>
          <S.RightSection>
            <S.PartTitle>작가의 책장</S.PartTitle>
            <S.MainInfo style={{ color: 'var(--BG_GRAY3)' }}>총 {0}권의 책이 있습니다.</S.MainInfo>
            <S.BookShelf>
              <BookCover imgsrc={TestBook} onClick={() => {}} />
              <BookCover imgsrc={TestBook} onClick={() => {}} />
              <BookCover imgsrc={TestBook} onClick={() => {}} />
              <BookCover imgsrc={TestBook} onClick={() => {}} />
              <BookCover imgsrc={TestBook} onClick={() => {}} />
              <BookCover imgsrc={TestBook} onClick={() => {}} />
            </S.BookShelf>
          </S.RightSection>
        </S.SectionContainer>
      </S.Container>
    </>
  );
}
