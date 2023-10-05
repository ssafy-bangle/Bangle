import { useRecoilValue } from 'recoil';
import { UserModeState } from '@src/modules/user';
import UserHome from '@src/components/organisms/userHome';
import AuthorHome from '@src/components/organisms/authorHome';
import * as S from '@src/styles/pageStyles/home/index.styled';
import Alert from '@src/components/atoms/alert';

export default function Home() {
  const mode = useRecoilValue(UserModeState);
  return (
    <>
      <Alert state="info" />
      {mode === 'user' ? <UserHome /> : <AuthorHome />}
    </>
  );
}
