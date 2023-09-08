import { atom } from 'recoil';

const KEY = 'STATE';

export const CartOpenState = atom<boolean>({
  key: `${KEY}/CartOpenState`,
  default: false,
});
