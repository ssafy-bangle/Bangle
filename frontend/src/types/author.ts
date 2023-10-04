export type getStatResProp = {
  data: {
    cover: string;
    title: string;
    today_views: number;
    today_purchases: number;
    today_reviews: number;
    total_purchases: number;
  };
};

export type bookStatProp = {
  cover: string;
  title: string;
  today_views: number;
  today_purchases: number;
  today_reviews: number;
  total_purchases: number;
};

export type authorInfo = {
  bookList: bookListProp[];
  follower: number;
  introduction: string;
  isFollow: boolean;
  nickname: string;
};

export type bookListProp = {
  id: number;
  title: string;
  genre: string;
  purchasePrice: number;
  rentalPrice: number;
  averageScore: number;
  cover: string;
};
