import { BookInfo } from '@src/types/book';
import { atom } from 'recoil';

const KEY = 'BOOK';

export const BookInfoState = atom<BookInfo>({
  key: `${KEY}/info`,
  default: {
    address: '',
    average_score: 0,
    cover: '',
    genre: '',
    introduction: '',
    purchase_price: 0,
    rental_price: 0,
    sale_count: 0,
    title: '',
    total_pages: 0,
    author_id: 0,
  },
});
