import { menuProps } from '@src/types/props';
import * as S from './index.styled';

export default function Menu({ name, url }: menuProps) {
  return (
    <>
      <S.Menu href={`/${url}`}>{name}</S.Menu>
    </>
  );
}
