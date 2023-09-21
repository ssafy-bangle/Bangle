import { BookCoverProps } from '@src/types/props';
import * as S from './index.styled';

export default function BookCover({ imgSrc, size, onClick }: BookCoverProps) {
  return (
    <S.ImgContainer size={size} imgSrc={imgSrc} onClick={onClick}>
      <S.Img src={imgSrc} alt="bookCoverImg"></S.Img>
    </S.ImgContainer>
  );
}
