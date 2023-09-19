import { UserInfo } from '@src/types/user';
import { atom } from 'recoil';

const KEY = 'USER';

export const UserInfoState = atom<UserInfo>({
  key: `${KEY}/info`,
  default: {
    member_id: 0,
    dust: 0,
    email: '',
    nickname: '',
    provider: 'KAKAO',
    public_key: new Uint8Array(),
    roles: 'ROLE_AUTHOR',
    user_id: '',
  },
});
