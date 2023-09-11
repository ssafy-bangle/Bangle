import { client } from '@src/apis/client';

const postPublicKey = async (nickname: string, publicKey: string) => {
  try {
    const res = await client().post('/users', { nickname, publicKey });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const userApi = { postPublicKey };
export default userApi;
