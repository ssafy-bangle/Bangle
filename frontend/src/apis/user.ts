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
    throw new Error('');
  }
};

const getMemberInfo = async (): Promise<UserInfo> => {
  try {
    const res = await client.get('/members');
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const putMemberNickname = async (nickname: string) => {
  try {
    const res = await client.put('/members', { nickname });
    return res.data;
  } catch (e) {
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

const getAccessToken = async () => {
  try {
    const res = await axios
      .create({
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + localStorage.getItem('refreshToken'),
        },
      })
      .post(process.env.NEXT_PUBLIC_DOMAIN + 'login/reissue');
    return res.data;
  } catch (e) {
    throw new Error('refreshToken이 만료되었습니다. 다시 로그인 하세요.');
  }
};

const postMemberInterest = async (interest: string[]) => {
  try {
    const res = await client.post('/members/interests', {
      interests: interest,
    });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const user = {
  postLogin,
  postMemberInfo,
  getMemberInfo,
  putMemberNickname,
  putMemberRolesToAuthor,
  getAccessToken,
  postMemberInterest,
};
export default user;
