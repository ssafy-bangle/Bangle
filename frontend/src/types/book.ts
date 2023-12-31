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
  authorId: number;
  nickname: string;
  publicationDate: string;
  reviews: reviewProps[];
  buy: boolean;
};

export type RecommendBook = {
  averageScore: number;
  cover: string;
  genre: string;
  id: number;
  purchasePrice: number;
  rentalPrice: number;
  title: string;
};

export type reviewProps = {
  id: number;
  cover: string;
};

export type postBookReqProps = {
  title: string;
  price: number;
  introduce: string;
  genre: string;
  pageNum: number;
  cover?: File;
  file?: File;
};

export type getBookshelfResProp = {
  bookId: number;
  title: string;
  address: string;
  cover: string;
  progress: number;
  authorId: number;
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
