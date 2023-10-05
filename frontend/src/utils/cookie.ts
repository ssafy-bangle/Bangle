import { CartBookProp } from '@src/types/props';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const cookie = {
  onSet: (name: string, value: string | number | string[] | number[] | CartBookProp[]) => {
    Array.isArray(value)
      ? cookies.set(name, JSON.stringify(value), {
          path: '/',
          secure: true,
          maxAge: 3000,
        })
      : cookies.set(name, value, {
          path: '/',
          secure: true,
          maxAge: 3000,
        });
  },
  onGet: (name: string) => {
    return cookies.get(name);
  },
};
