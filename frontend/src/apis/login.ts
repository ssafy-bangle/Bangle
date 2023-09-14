import { client } from '@src/apis/client';
import axios from 'axios';
const postPublicKey = async (nickname: string, publicKey: string) => {
  try {
    const res = await client().post('/users', { nickname, publicKey });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const postOidcLogin = async (idToken: string) => {
	try {
		const res = await axios.create({
			headers: {
				"Content-Type": 'application/json; charset=UTF-8',
				"Authorization": "Bearer " + idToken
			}
		}).post(process.env.NEXT_PUBLIC_DOMAIN + 'api/members/login/kakao')
		return res.data;
	} catch (e) {
		console.log(e)
		throw new Error('');
	}
}


const loginApi = { postOidcLogin };
export default loginApi;
