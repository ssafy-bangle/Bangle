import { StaticImageData } from 'next/image';
import { BookInfo, getBookshelfResProp } from './book';
import { SearchBook } from './search';
import { bookListProp } from './author';

export type AlertProps = {
  state: 'error' | 'info';
  message?: string;
  setIsShow?: (value: boolean) => void;
};

export type LoadingProps = {
  content?: string;
};

export type ButtonProps = {
  length: 'long' | 'short' | 'medium';
  theme?: 'default' | 'line' | 'text';
  size?: 'big';
  active?: boolean;
  content?: string;
  icon?: string;
  onClick?: () => void;
};

export type BookCoverProps = {
  imgsrc: StaticImageData | string;
  size?: 'small' | 'big';
  onClick?: () => void;
};

export type BookProps = {
  data?: bookListProp | getBookshelfResProp;
  imgsrc: string;
  onClick?: (bookId: number | undefined) => void;
  showProgress: boolean;
};

export type MenuProps = {
  name: string;
  url: string;
};

export type InputProps = {
  type?: 'text' | 'number' | 'password';
  size: 'short' | 'medium' | 'default' | 'long';
  state: 'default' | 'focus' | 'error';
  placeholder: string;
  value?: string;
  setInput: (value: string) => void;
};

export type CheckBoxProps = {
  content: string;
  isChecked?: boolean;
  setInput: (value: boolean) => void;
};

export type PasswordCheckProps = {
  setIsKeyValid: Function;
  setPrivateKey: Function;
};

export type MunziBtnProps = {
  price?: number;
  content: string;
  onClick?: () => void;
};

export type IconProps = {
  name: string;
};

export type DropdownProps = {
  source?: string;
  items: DropdownItems[];
  setInput: (value: string) => void;
};

export type DropdownItems = {
  label: string;
  key: number;
};

export type ModalProps = {
  title?: string;
  data?: BookInfo;
  type: 'publish' | 'buy' | 'dirBuy' | 'dirRent';
  price: number;
  onClick?: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export type selectedBook = {
  purchases: number | '-';
  price: number | '-';
  month_purchases: number[];
};

export type ChipProps = {
  title: string;
  size: 'small' | 'big';
  icon?: string;
  imgsrc?: string;
  purchases?: number;
  price?: number;
  month_purchases?: number[];
  setValue?: (value: string | number | selectedBook) => void;
};

export type RatingProps = {
  value: number;
  label: boolean;
  editable: boolean;
  setInput: (value: number) => void;
};

export type NoValueProps = {
  type: string;
};

export type BooksContainerProps = {
  type?: 'book' | 'author';
  page: 'bookShelf' | 'search' | 'wishList';
  data?: SearchBook | any; //작가의 content type이 api 명세서에 없는 이슈로 any로 임시 지정
  title?: string;
  onClick?: (bookId: number | undefined) => void;
};

export type CardProps = {
  type: 'author' | 'genre';
  title: string;
  onClick?: (value: string) => void;
  selected: boolean;
};

export type CartBookProp = {
  id: number;
  image: StaticImageData | string;
  title: string;
  author: string;
  price: number;
  setChecked?: any;
  checked?: boolean;
};
