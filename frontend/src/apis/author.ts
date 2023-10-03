import { getStatResProp } from '@src/types/author';
import apiInstance from './client';

const client = apiInstance();

const getStat = async () => {
  try {
    const res = await client.get(`/stat`);
    return res.data.data;
  } catch (e) {
    throw new Error('');
  }
};

const author = { getStat };
export default author;
