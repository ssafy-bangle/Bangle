import Nav from '@src/components/molecules/nav';
import * as S from './index.styled';
import Cart from '@src/components/organisms/cart';
import { useRouter } from 'next/router';

export default function Layout(props: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <S.Container>
      {router.pathname !== '/' && <Nav role="user" />}
      {props.children}
      <Cart />
    </S.Container>
  );
}
