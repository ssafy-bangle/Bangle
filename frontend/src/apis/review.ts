import { postBookReviewProps } from '@src/types/book';
import apiInstance from './client';

const client = apiInstance();

const postReview = async (review: postBookReviewProps) => {
  try {
    const res = await client.post(`/books/review`, review);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getReviewImg = async (comment: string) => {
  try {
    const res = await client.post('/openai/createImage', comment);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const review = { postReview, getReviewImg };
export default review;
