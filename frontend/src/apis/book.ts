import { getBookshelfResProp, postBookReqProps, buyBookReqProps } from '@src/types/book';
import apiInstance from './client';

const client = apiInstance();

const getBookShelf = async () => {
  try {
    const res = await client.get(`/bookshelf/list`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getBookDetail = async (bookId: number) => {
  try {
    const res = await client.get(`/books/detail/${bookId}`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const postBook = async (body: postBookReqProps) => {
  try {
    // fill form data to send
    const formData = new FormData();

    body.file && formData.append('file', body.file);
    body.cover && formData.append('cover', body.cover);
    formData.append(
      'publishRequest',
      new Blob(
        [
          JSON.stringify({
            title: body.title,
            price: body.price,
            introduce: body.introduce,
            genre: body.genre,
          }),
        ],
        { type: 'application/json' },
      ),
    );

    const res = await apiInstance('multipart/form-data').post('/books/publish', formData);
    return res.data;
  } catch (e) {
    console.log('Error at postBook', e);
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

const wishBook = async (bookId: number) => {
  try {
    const res = await client.post(`/wishlist/${bookId}`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getWishList = async () => {
  try {
    const res = await client.get(`/wishlist`);
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

const bookApi = { getBookShelf, getBookDetail, postBook, buyBook, wishBook, getWishList };
export default bookApi;
