import { UserInfoState } from '@src/modules/user';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

export const handleLogout = () => {
  const router = useRouter();
  const setUserInfo = useSetRecoilState(UserInfoState);
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  setUserInfo({
    nickname: '',
    dust: 0,
    email: '',
    roles: 'ROLE_USER',
    userId: '',
  });
  router.push('/');
};
