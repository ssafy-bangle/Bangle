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
    wish: false,
  },
});

export const BookInfoSelector = selector({
  key: `${KEY}/info/selector`,
  get: async ({ get }) => {
    const bookInfo = get(BookInfoState);
    return bookInfo;
  },

  set: ({ set }, newValue) => {
    // DefaultValue일 경우 아무 작업도 하지 않음
    if (newValue instanceof DefaultValue) {
      return;
    }

    // UserInfo 타입인 경우에만 업데이트 및 API 호출 수행
    set(BookInfoState, newValue);
    // userApi.postMemberInfo(newValue);
  },
});
