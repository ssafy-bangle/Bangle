import { postBookReqProps } from '@src/types/book';
import apiInstance from './client';

const client = apiInstance();

const postBook = async (body: postBookReqProps) => {
  try {
    const res = await client.post(`/authors/register`, body);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const book = { postBook };
export default book;
