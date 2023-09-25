import { postBookReviewProps } from '@src/types/book';
import apiInstance from './client';

const client = apiInstance();

const postReview = async (body: postBookReviewProps) => {
  try {
    const res = await client.post(`/books/review`, body);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getReviewImg = async () => {
  try {
    const res = await client.get('/');
    return res.data;
  } catch (e) {
    console.log('Error at getReviewImg: ', e);
    throw new Error('');
  }
};

const review = { postReview, getReviewImg };
export default review;
