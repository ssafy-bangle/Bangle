import { atom } from 'recoil';

const KEY = 'USER';

export const UserInfoState = atom({
  key: `${KEY}/info`,
  default: {
    publickKey: '',
    nickname: '',
    email: '',
    roles: 'author',
  },
});
