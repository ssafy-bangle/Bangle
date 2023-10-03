import { getBookshelfResProp, postBookReqProps, buyBookReqProps } from '@src/types/book';
import apiInstance from './client';
import axios from 'axios';

const client = apiInstance();

// const formData = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_DOMAIN + 'api',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     Authorization: token,
//   },
// });

const getBookShelf = async (): Promise<getBookshelfResProp> => {
  try {
    const res = await client.get(`/bookshelf/list`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const postBook = async (body: postBookReqProps) => {
  try {
    // fill form data to send
    const formData = new FormData();

    body.file && formData.append("file", body.file);
    body.cover && formData.append("cover", body.cover);
    formData.append("publishRequest", new Blob([JSON.stringify({
      title: body.title,
      price: body.price,
      introduce: body.introduce,
      genre: body.genre
    })], { type: 'application/json' }));

    const res = await apiInstance("multipart/form-data").post(
      '/books/publish',
      formData,
    )
    return res.data;
  } catch (e) {
    console.log("Error at postBook", e)
    throw new Error('');
  }
};


const buyBook = async (body: buyBookReqProps) => {
  try {
    const res = await client.post(`/orders/book`, body);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

// const postBookImg = async (imgData: FormData) => {
//   try {
//     //Url 수정 해야함
//     const token = 'Bearer ' + localStorage.getItem('accessToken');
//     const res = await formData.post(`/authors/register`, imgData);
//     return res.data;
//   } catch (e) {
//     throw new Error('');
//   }
// };

// const postBookFile = async (fileData: FormData) => {
//   try {
//     //Url 수정 해야함
//     const res = await formData.post(`/authors/register`, fileData);
//     return res.data;
//   } catch (e) {
//     throw new Error('');
//   }
// };

const book = { getBookShelf, postBook, buyBook };
export default book;
