import apiInstance from './client';
const client = apiInstance();
const postPayment = async (amount: number) => {
  try {
    const res = await client.post('/payments/' + amount);
    return res.data;
  } catch (e) {
    console.log('ERROR AT postPayment: ', e);
    throw new Error('');
  }
};

const payment = { postPayment };
export default payment;
