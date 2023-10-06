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

const getReviewDetail = async (reviewId: number) => {
  try {
    const res = await client.get('/books/review?reviewId=' + reviewId);
    return res.data
  } catch (e) {
    throw new Error('');
  }
}

const review = { postReview, getReviewImg, getReviewDetail };
export default review;
