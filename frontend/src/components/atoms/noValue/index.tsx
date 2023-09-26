import * as S from './index.styled';
import { NoValueProps } from '@src/types/props';
import { Munzi } from '@src/assets/imgs';

export default function NoValue({ type }: NoValueProps) {
  const messageSwitch = (type: string) => {
    switch (type) {
      case 'search':
        return '검색 결과가 없어요';
      case 'bookDetail':
        return '아직 리뷰가 없어요';
      case 'bookShelf':
        return '아직 구매한 책이 없어요';
      case 'card':
        return '아직 카드가 없어요';
      default:
        return '';
    }
  };

  const message = messageSwitch(type);

  return (
    <>
      <S.MunziContainer>
        <S.ImageMunzi src={Munzi} alt="먼지" />
        <S.TextContent>{message}</S.TextContent>
      </S.MunziContainer>
    </>
  );
}
