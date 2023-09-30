export type BookInfo = {
  address: string;
  average_score: number;
  cover: string;
  genre: string;
  introduction: string;
  purchase_price: number;
  rental_price: number;
  sale_count: number;
  title: string;
  total_pages: number;
  author_id: number;
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
  title: string;
  address: string;
  cover: string;
  progress: number;
};

export type postBookReviewProps = {
  bookId: number;
  cover: string;
  content: string;
  score: number;
};

export type buyBookProps = {
  bookId: number;
  orderStatus: string;
};

export type buyBookReqProps = {
  books: buyBookProps[];
};
