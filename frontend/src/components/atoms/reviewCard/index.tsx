import { BookCoverProps } from '@src/types/props';
import * as S from './index.styled';
import { useEffect, useState } from 'react';
import { Popover } from 'antd';
import { reviewApi } from '@src/apis';
import Rating from '../rating';

interface review {
  score: number;
  content: string;
  nickname: string;
  createdTime: string;
}

export default function ReviewCard({ imgsrc, size, reviewId }: BookCoverProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [review, setReview] = useState<review>();
  const setHoverHandler = () => {
    setIsHovered((pre) => !pre);
  };

  useEffect(() => {
    if (reviewId) {
      reviewApi.getReviewDetail(reviewId)
        .then((res)=>{
          const date = new Date(res.data.createdTime);
          const dateString = date.toLocaleDateString('ko-ko', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          });
          setReview({
            ...(res.data),
            createdTime: dateString
          })
        })
    }
  }, [reviewId])

  const reviewElement = () => {
    return (
        review &&
        <>
          <Rating value={review.score} label={false} editable={false} setInput={() => {}} size="small" />
          <hr />
          {review.content}
          <br />
          {review.nickname} {review.createdTime}
        </>
    )
  }

  return (
    <S.ImgContainer size={size} imgsrc={imgsrc} onMouseEnter={setHoverHandler} onMouseLeave={setHoverHandler}>
      <S.Img src={imgsrc} alt="bookCoverImg" width={300} height={400} />
      {reviewId && (
        
        <Popover content={reviewElement} trigger="focus">
        <S.ButtonOverlay isHovered={isHovered} onClick={() => {}}>
          리뷰 보기
        </S.ButtonOverlay>
        </Popover>
      )}
    </S.ImgContainer>
  );
}
