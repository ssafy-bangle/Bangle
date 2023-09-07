import { client } from "@src/apis/client";

const login = async (body: loginReqProps): Promise<loginResProps> => {
  try {
    const res = await client().post('/login/apple', body);
    return res.data;
  } catch (e) {
    throw new Error("");
  }
};

const postPublicKey = async (nickname:string, publicKey: string) => {
  try {
    const res = await client().post('/users', {nickname, publicKey})
    return res.data
  } catch (e) {
    throw new Error("")
  }
}

const userApi = { login, postPublicKey };
export default userApi;