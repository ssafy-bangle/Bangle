import { UserInfo } from '@src/types/user';
import apiInstance from './client';
import axios from 'axios';

const client = apiInstance();

const postLogin = async (idToken: string) => {
  try {
    const res = await axios
      .create({
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + idToken,
        },
      })
      .post(process.env.NEXT_PUBLIC_DOMAIN + 'api/members/login/kakao');
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const postPublicKey = async (publicKey: string) => {
  try {
    const res = await client.post('/publickey', { publicKey });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const postMemberInfo = async (body: UserInfo) => {
  try {
    console.log('TEST', { ...body });
    const res = await client.post('/members', { ...body });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getMemberInfo = async (): Promise<UserInfo> => {
  try {
    const res = await client.get('/members');
    return res.data;
  } catch (e) {
    console.log('Error at getMemberInfo: ', e);
    throw new Error('');
  }
};

const putMemberNickname = async (nickname: string) => {
  console.log('Put member Nickname:', nickname);
  try {
    const res = await client.put('/members', { nickname });
    return res.data;
  } catch (e) {
    console.log('Error at putMemberNickname: ', e);
    throw new Error('');
  }
};

const putMemberRolesToAuthor = async () => {
  try {
    const res = await client.put(`/members/register`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const user = {
  postLogin,
  postPublicKey,
  postMemberInfo,
  getMemberInfo,
  putMemberNickname,
  putMemberRolesToAuthor,
};
export default user;
