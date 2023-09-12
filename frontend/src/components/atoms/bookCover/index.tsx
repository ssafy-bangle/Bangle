import { BookCoverProps } from '@src/types/props';
import * as S from './index.styled';

export default function BookCover({ imgSrc }: BookCoverProps) {
  return <S.Img src={imgSrc} alt="bookCoverImg"></S.Img>;
}
