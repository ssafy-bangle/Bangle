import { BookInfo } from '@src/types/book';
import { DefaultValue, atom, selector } from 'recoil';

const KEY = 'BOOK';

export const BookInfoState = atom<BookInfo>({
  key: `${KEY}/info`,
  default: {
    bookId: 0,
    address: '',
    averageScore: 0,
    cover: '',
    genre: '',
    introduction: '',
    purchasePrice: 0,
    rentalPrice: 0,
    title: '',
    authorId: 0,
    nickname: '',
    publicationDate: '',
    reviews: [],
    buy: false,
  },
});
