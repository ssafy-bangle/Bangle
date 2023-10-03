import * as S from './index.styled';
import Icon from '@src/components/atoms/icon';
import { ChipProps } from '@src/types/props';
import BookCover from '../bookCover';
import { TestBook } from '@src/assets/imgs';

export default function Chip({ size, title, icon, imgsrc, purchases, setValue }: ChipProps) {
  return (
    <>
      <S.ChipContainer
        size={size}
        title={title}
        icon={icon}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          purchases ? setValue && setValue(purchases) : setValue && setValue(title);
        }}>
        {icon && (
          <S.IconContainer>
            <Icon name={icon} />
          </S.IconContainer>
        )}
        {imgsrc && <BookCover imgsrc={imgsrc} size="small" />}
        <S.Title>{title}</S.Title>
      </S.ChipContainer>
    </>
  );
}
