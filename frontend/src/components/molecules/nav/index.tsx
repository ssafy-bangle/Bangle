import Menu from '@src/components/atoms/menu';
import * as S from './index.styled';
import { NavProps } from '@src/types/props';
import { Logo } from '@src/assets/icons';

export default function Nav({ role }: NavProps) {
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

  const selectedList = role === 'author' ? authorList : userList;

  return (
    <>
      <Logo />
      <div>
        {Object.entries(selectedList).map(([k, v]) => (
          <Menu key={k} name={v} url={k} />
        ))}
      </div>
    </>
  );
}
