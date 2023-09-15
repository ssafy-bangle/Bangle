import { client, clientWithToken } from '@src/apis/client';
const postPayment = async (amount: number) => {
  try {
    const res = await clientWithToken().post('/payments/' + amount);
    return res.data;
  } catch (e) {
    console.log("ERROR AT postPayment: ", e);
    throw new Error('');
  }
};


const paymentAPI = { postPayment };
export default paymentAPI;
