import { client, clientWithToken } from '@src/apis/client';

const postMemberInfo = async (nickname: string, publicKey: string, role: string) => {
  console.log("Post member INfo:", nickname, publicKey, role)
  try {
    const res = await clientWithToken().post(
      '/members',
      {
        nickname,
        publicKey,
        role
      }
    )
    return res.data;
  } catch(e) {
    console.log("Error at postMemberInfo: ", e)
    throw new Error('');
  }
}

const getMemberInfo = async () => {
  try {
    const res = await clientWithToken().get('/members')
    return res.data;
  } catch(e) {
    console.log("Error at getMemberInfo: ", e)
    throw new Error('');

  }
}

const userApi = { postMemberInfo, getMemberInfo };
export default userApi;
