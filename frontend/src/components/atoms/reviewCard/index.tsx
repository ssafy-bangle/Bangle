import { BookCoverProps } from '@src/types/props';
import * as S from './index.styled';

export default function ReviewCard({ imgsrc, size }: BookCoverProps) {
  return (
    <S.ImgContainer size={size} imgsrc={imgsrc}>
      <S.Img src={imgsrc} alt="bookCoverImg" width={300} height={400} ></S.Img>
    </S.ImgContainer>
  );
}
