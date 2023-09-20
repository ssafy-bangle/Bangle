import * as S from './index.styled';
import { NoValueProps } from '@src/types/props';
import Image from 'next/image';
import { Munzi } from '@src/assets/imgs';

export default function NoValue({ type }: NoValueProps) {
  return (
    <>
      <S.MunziContainer>
          <S.ImageMunzi src={Munzi} alt="먼지" />
          <S.TextContent>
            아직 리뷰가 없어요
          </S.TextContent>
      </S.MunziContainer>
    </>
  );
}
