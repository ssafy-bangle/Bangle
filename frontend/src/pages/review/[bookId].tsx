import * as S from '@src/styles/pageStyles/review/index.styled';
import { useState, useEffect } from 'react';
import PageTitle from '@src/components/atoms/pageTitle';
import Button from '@src/components/atoms/button';
import ReviewCard from '@src/components/atoms/reviewCard';
import NoValue from '@src/components/atoms/noValue';
import Rating from '@src/components/atoms/rating';
import { reviewApi } from '@src/apis';
import { useRouter } from 'next/router';
import { AlertOpenState } from '@src/modules/state';
import { useSetRecoilState } from 'recoil';

export default function Review() {
  const [reviewImg, setReviewImg] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [score, setScore] = useState<number>(5);
  const router = useRouter();
  const bookId = Number(router.query.bookId);
  const [currentDot, setCurrentDot] = useState<number>(0);
  const [isGenerate, setIsGenerate] = useState<boolean>(false);
  const setIsAlertOpen = useSetRecoilState(AlertOpenState);

  const handlePostReview = () => {
    reviewApi.postReview({
      bookId: bookId,
      content: review,
      cover: reviewImg,
      score: score,
    });
    alert('리뷰 등록이 완료되었습니다.');
    router.push(`/bookshelf/${bookId}`);
  };

  const getCoverImg = (searchWord: string) => {
    setIsGenerate((pre) => !pre);
    reviewApi
      .getReviewImg(searchWord)
      .then((res) => {
        setReviewImg(res.data.data[0].url);
        setIsGenerate((pre) => !pre);
      })
      .catch(() => {
        setIsAlertOpen(true);
      });
  };

  useEffect(() => {
    setScore(score);
  }, [score]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDot((prevDot) => (prevDot + 1) % 5);
    }, 600);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <S.Container>
      <PageTitle>리뷰</PageTitle>
      <S.FullContainer>
        <S.LeftSection>
          <S.Title>AI 그림카드</S.Title>
          <S.TextArea
            onChange={({ target: { value } }) => setSearchWord(value)}
            placeholder={`책과 관련한 단어 또는 문장을 입력하고 \n나만의 카드를 생성해보세요 \n\n<예시> \n뭉게 구름 속에서 방글 웃는 모습, 행복, 동심, 휴식`}></S.TextArea>
          <S.BottomDiv>
            <Button
              length="medium"
              content="카드 생성하기"
              active={searchWord ? true : false}
              icon="mode"
              onClick={() => getCoverImg(searchWord)}
            />
            {isGenerate && (
              <S.BottomDotsDiv>
                {Array.from('카드생성중').map((char, index) => (
                  <S.Dots key={index}>
                    {index === currentDot ? (
                      <S.AnimationWrapper isWhite={index === currentDot}>{char}</S.AnimationWrapper>
                    ) : (
                      char
                    )}
                  </S.Dots>
                ))}
              </S.BottomDotsDiv>
            )}
          </S.BottomDiv>
        </S.LeftSection>
        <S.RightSection>
          <S.Title>리뷰</S.Title>
          <S.ReviewContainer>
            {reviewImg ? (
              <ReviewCard imgsrc={reviewImg} size="big" />
            ) : (
              <S.NoReviewCard>
                <NoValue type="card" />
              </S.NoReviewCard>
            )}
            <S.ReviewInfo>
              <S.TextArea
                placeholder="간단한 리뷰를 남겨주세요"
                onChange={({ target: { value } }) => setReview(value)}></S.TextArea>
              <S.InfoBottom>
                <Rating value={score} label={false} editable={true} setInput={setScore} />
                <Button
                  length="medium"
                  content="작성완료"
                  active={reviewImg && review ? true : false}
                  onClick={handlePostReview}
                />
              </S.InfoBottom>
            </S.ReviewInfo>
          </S.ReviewContainer>
        </S.RightSection>
      </S.FullContainer>
    </S.Container>
  );
}
