import { getBookshelfResProp, postBookReqProps, buyBookReqProps } from '@src/types/book';
import apiInstance from './client';
import axios from 'axios';

const client = apiInstance();

const postBookshelfPage = async (bookId: number | string, curPage: number, epubCfi: string) => {
  try {
    const res = await client.post('/bookshelf', {
      bookId: bookId,
      currentPage: curPage,
      epubCfi: epubCfi,
    });
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getBookViewDetail = async (bookId: number | string) => {
  try {
    const res = await client.get(`/bookshelf/${bookId}`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

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
            totalPage: body.pageNum,
          }),
        ],
        { type: 'application/json' },
      ),
    );

    const res = await apiInstance('multipart/form-data').post('/books/publish', formData);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const buyBook = async (body: buyBookReqProps) => {
  try {
    const res = await axios
      .create({
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
      .post(' https://j9a501.p.ssafy.io' + `/api/orders/book`, body);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
  // try {
  //   const res = await client.post(`/orders/book`, body);
  //   return res.data;
  // } catch (e) {
  //   console.log('error at buybook', e);
  //   throw new Error('');
  // }
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

const getGenre = async () => {
  try {
    const res = await client.post(`/books/recommend/genre`);
    return res.data;
  } catch (e) {
    throw new Error('');
  }
};

const getRecommendBookByGenre = async () => {
  // try {
  //   const res = await client.post(`/books/recommend/genre`);
  //   return res.data.data;
  // } catch (e) {
  //   throw new Error('');
  // }
  try {
    const res = await axios
      .create({
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      })
      .post(' https://j9a501.p.ssafy.io' + '/api/books/recommend/genre');
    return res.data.data;
  } catch (e) {
    throw new Error('');
  }
};

const getBookByInterests = async () => {
  try {
    const res = await client.get(`/members/interests`);
    return res.data.data;
  } catch (e) {
    throw new Error('');
  }
};

const book = {
  getGenre,
  getBookShelf,
  getBookDetail,
  postBook,
  buyBook,
  wishBook,
  getWishList,
  getRecommendBookByGenre,
  getBookByInterests,
  postBookshelfPage,
  getBookViewDetail,
};
export default book;
