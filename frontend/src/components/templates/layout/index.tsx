import Nav from '@src/components/molecules/nav';
import * as S from './index.styled';
import Cart from '@src/components/organisms/cart';
import { useRouter } from 'next/router';

export default function Layout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const checkPath = () => {
    switch (router.pathname) {
      case '/':
        return false;
      case '/info':
        return false;
      case '/ebook/[bookId]':
        return false;
      default:
        return true;
    }
  };

  return (
    <S.Container>
      {checkPath() && <Nav />}
      {props.children}
      <Cart />
    </S.Container>
  );
}
