import * as S from './index.styled';
import Menu from '@src/components/atoms/menu';
import { LogoImg } from '@src/assets/imgs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartOpenState } from '@src/modules/state';
import { useRouter } from 'next/router';
import { UserInfoState, UserModeState } from '@src/modules/user';
import SearchBar from '../searchBar';
import Icon from '@src/components/atoms/icon';

export default function Nav() {
  const router = useRouter();
  const mode = useRecoilValue(UserModeState);
  const setOpen = useSetRecoilState(CartOpenState);
  const { nickname } = useRecoilValue(UserInfoState);

  const showDrawer = () => {
    setOpen(true);
  };

  const authorList = {
    home: '홈',
    write: '출판',
    mypage: '마이페이지',
  };

  const userList = {
    home: '홈',
    bookshelf: '책장',
    mypage: '마이페이지',
  };

  Object.freeze(authorList);
  Object.freeze(userList);

  const selectedList = mode === 'author' ? authorList : userList;

  return (
    <S.Container>
      <S.LogoBox src={LogoImg} width={36} alt="logoImg" onClick={() => router.push('/home')} />
      <S.NavContainer>
        <S.MenuContainer>
          {Object.entries(selectedList).map(([k, v], idx) => (
            <Menu key={idx} name={v} url={k} />
          ))}
        </S.MenuContainer>
        {mode === 'user' ? (
          router.pathname !== '/search' ? (
            <SearchBar />
          ) : null
        ) : (
          <S.Info>
            안녕하세요. <strong>{nickname} 작가</strong>님
          </S.Info>
        )}
      </S.NavContainer>
      {mode === 'user' && (
        <S.CartBox onClick={showDrawer}>
          <Icon name="cart" />
        </S.CartBox>
      )}
    </S.Container>
  );
}
