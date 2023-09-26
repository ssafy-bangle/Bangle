import { BookCoverProps } from '@src/types/props';
import * as S from './index.styled';

export default function ReviewCard({ imgsrc, size }: BookCoverProps) {
  return (
    <S.ImgContainer size={size} imgsrc={imgsrc}>
      <S.Img src={imgsrc} alt="bookCoverImg"></S.Img>
    </S.ImgContainer>
  );
}
