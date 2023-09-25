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
  cover: string;
  price: number;
  file: string;
  introduce: string;
};

export type postBookReviewProps = {
  bookId: number;
  cover: string;
  content: string;
  score: number;
};
