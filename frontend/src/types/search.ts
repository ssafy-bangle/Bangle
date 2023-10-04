export type SearchBook = {
  id: number;
  title: string;
  genre: string;
  purchasePrice: number;
  rentalPrice: number;
  averageScore: number;
  cover: string;
};

type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type getSearchResProp = {
  success: boolean;
  msg: string;
  data: {
    books: {
      content: SearchBook[];
      pageable: Pageable;
      last: boolean;
      totalPages: number;
      totalElements: number;
      size: number;
      number: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      first: boolean;
      numberOfElements: number;
      empty: boolean;
    };
    authors: {
      content: any[]; // 여기에 작가 정보 타입을 정의
      pageable: Pageable;
      last: boolean;
      totalPages: number;
      totalElements: number;
      size: number;
      number: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      first: boolean;
      numberOfElements: number;
      empty: boolean;
    };
  };
};
