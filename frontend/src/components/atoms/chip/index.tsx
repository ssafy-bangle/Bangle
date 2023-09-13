import * as S from './index.styled';
import Icon from '@src/components/atoms/icon';
import { ChipProps } from '@src/types/props';
import BookCover from '../bookCover';
import { TestBook } from '@src/assets/imgs';

export default function Chip({ size, title, icon, onClick }: ChipProps) {
  return (
    <>
      <S.ChipContainer size={size} title={title} icon={icon} onClick={onClick}>
        {icon ? <S.IconContainer ><Icon name={icon} /></S.IconContainer> : <BookCover imgSrc={TestBook} size="small" />}
        <S.Title>{title}</S.Title>
      </S.ChipContainer>
    </>
  );
}
