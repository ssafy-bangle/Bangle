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

const postMemberInfo = async (nickname: string, publicKey: string, role: string) => {
  console.log('Post member INfo:', nickname, publicKey, role);
  try {
    const res = await client.post('/members', {
      nickname,
      publicKey,
      role,
    });
    return res.data;
  } catch (e) {
    console.log('Error at postMemberInfo: ', e);
    throw new Error('');
  }
};

const getMemberInfo = async () => {
  try {
    const res = await client.get('/members');
    return res.data;
  } catch (e) {
    console.log('Error at getMemberInfo: ', e);
    throw new Error('');
  }
};

const user = { postPublicKey, postMemberInfo, getMemberInfo };
export default user;
