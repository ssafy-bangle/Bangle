import { useRecoilValue } from 'recoil';
import { UserInfoState } from '@src/modules/user';
import UserHome from '@src/components/organisms/userHome';
import AuthorHome from '@src/components/organisms/authorHome';

export default function Home() {
  const { role } = useRecoilValue(UserInfoState);
  return <>{role === 'ROLE_USER' ? <UserHome /> : <AuthorHome />}</>; 
}
