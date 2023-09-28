export type BookInfo = {
  bookId: number;
  address: string;
  averageScore: number;
  cover: string;
  genre: string;
  introduction: string;
  purchasePrice: number;
  rentalPrice: number;
  title: string;
  nickname: string;
  reviews: postBookReviewProps[];
  buy: boolean;
};

export type postBookReqProps = {
  title: string;
  price: number;
  introduce: string;
  genre: string;
  cover?: File;
  file?: File;
};

export type getBookshelfResProp = {
  bookId: number;
  title: FormData;
  address: string;
  cover: FormData;
  progress: number;
};

export type postBookReviewProps = {
  bookId: number;
  content: string;
  score: number;
  cover: string;
};

export type buyBookProps = {
  bookId: number;
  orderStatus: string;
};

export type buyBookReqProps = {
  books: buyBookProps[];
};
