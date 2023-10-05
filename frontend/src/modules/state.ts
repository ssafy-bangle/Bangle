import { atom } from 'recoil';

const KEY = 'STATE';

export const CartOpenState = atom<boolean>({
  key: `${KEY}/cart`,
  default: false,
});

export const AlertOpenState = atom<boolean>({
  key: `${KEY}/alert`,
  default: false,
});
