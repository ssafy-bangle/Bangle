import { userApi } from '@src/apis';
import { UserInfo, UserMode } from '@src/types/user';
import { DefaultValue, atom, selector } from 'recoil';
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

export const UserModeState = atom<UserMode>({
  key: `${KEY}/mode`,
  default: 'user',
});

export const UserInfoSelector = selector({
  key: `${KEY}/info/selector`,
  get: async ({ get }) => {
    const userInfo = get(UserInfoState);
    return userInfo;
  },

  set: ({ set }, newValue) => {
    // DefaultValue일 경우 아무 작업도 하지 않음
    if (newValue instanceof DefaultValue) {
      return;
    }

    // UserInfo 타입인 경우에만 업데이트 및 API 호출 수행
    set(UserInfoState, newValue);
    // userApi.postMemberInfo(newValue);
  },
});
