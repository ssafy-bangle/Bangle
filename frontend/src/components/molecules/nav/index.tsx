import * as S from './index.styled';
import Menu from '@src/components/atoms/menu';
import { CartImg, LogoImg } from '@src/assets/imgs';
import Input from '@src/components/atoms/input';
import Image from 'next/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartOpenState } from '@src/modules/state';
import { useRouter } from 'next/router';
import { UserInfoState } from '@src/modules/user';

export default function Nav() {
  const { roles } = useRecoilValue(UserInfoState);
  const router = useRouter();
  const setOpen = useSetRecoilState(CartOpenState);

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

  const selectedList = roles === 'ROLE_USER' ? userList : authorList;

  return (
    <S.Container>
      <S.LogoBox src={LogoImg} width={36} alt="logoImg" onClick={() => router.push('/')} />
      <S.NavContainer>
        <S.MenuContainer>
          {Object.entries(selectedList).map(([k, v], idx) => (
            <Menu key={idx} name={v} url={k} />
          ))}
        </S.MenuContainer>

        {roles === 'ROLE_USER' ? (
          <>
            <Input size="medium" state="focus" placeholder="검색어를 입력해주세요" setInput={() => {}} />
            <S.CartBox>
              <Image src={CartImg} width={20} alt="cartImg" onClick={showDrawer} />
            </S.CartBox>
          </>
        ) : (
          <S.Info>
            안녕하세요. <strong>방글이 작가</strong>님
          </S.Info>
        )}
      </S.NavContainer>
    </S.Container>
  );
}
