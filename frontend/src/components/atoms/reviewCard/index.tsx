import { BookCoverProps } from '@src/types/props';
import * as S from './index.styled';
import { useState } from 'react';

export default function ReviewCard({ imgsrc, size, onClick }: BookCoverProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const setHoverHandler = () => {
    setIsHovered((pre) => !pre);
  };
  return (
    <S.ImgContainer size={size} imgsrc={imgsrc} onMouseEnter={setHoverHandler} onMouseLeave={setHoverHandler}>
      <S.Img src={imgsrc} alt="bookCoverImg" width={300} height={400} />
      {onClick && (
        <S.ButtonOverlay isHovered={isHovered} onClick={() => {}}>
          리뷰 보기
        </S.ButtonOverlay>
      )}
    </S.ImgContainer>
  );
}
