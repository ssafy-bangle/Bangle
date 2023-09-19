import apiInstance from './client';

const client = apiInstance();
const postPublicKey = async (nickname: string, publicKey: string) => {
  try {
    const res = await client.post('/users', { nickname, publicKey });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const user = { postPublicKey };
export default user;
