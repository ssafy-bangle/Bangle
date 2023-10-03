import { useRecoilValue } from 'recoil';
import { UserModeState } from '@src/modules/user';
import UserHome from '@src/components/organisms/userHome';
import AuthorHome from '@src/components/organisms/authorHome';
import * as S from '@src/styles/pageStyles/home/index.styled';

import ipfs from '@src/utils/ipfs';

export default function Home() {
  const mode = useRecoilValue(UserModeState);
  ipfs.downloadBookFile("")
  return (
    <>
      {mode === 'user' ? <UserHome /> : <AuthorHome />}
      <S.footer></S.footer>
    </>
  );
}
