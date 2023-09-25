import { userApi } from '@src/apis';
import { UserInfo } from '@src/types/user';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const KEY = 'USER';
const { persistAtom } = recoilPersist();

export const UserInfoState = atom<UserInfo>({
  key: `${KEY}/info`,
  default: {
    nickname: '',
    dust: 0,
    email: '',
    roles: 'ROLE_USER',
    userId: '',
  },
  effects_UNSTABLE: [persistAtom],
});

const UserInfoSelector = selector({
  key: `${KEY}/data/monthly`,
  get: async ({ get }) => {
    const userInfo = get(UserInfoState);
    userApi.postMemberInfo({ ...userInfo });
  },
});
