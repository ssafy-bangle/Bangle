import { MenuProps } from '@src/types/props';
import * as S from './index.styled';
import { useRouter } from 'next/router';

export default function Menu({ name, url }: MenuProps) {
  const router = useRouter();
  return (
    <>
      <S.Container>
        <S.Menu href={`/${url}`} isSelected={router.pathname === `/${url}`}>
          {name}
        </S.Menu>
      </S.Container>
    </>
  );
}
