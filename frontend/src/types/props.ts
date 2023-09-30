import { StaticImageData } from 'next/image';
import { getBookshelfResProp } from './book';

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
  imgsrc: StaticImageData;
  onClick?: () => void;
};

export type MenuProps = {
  name: string;
  url: string;
};

export type InputProps = {
  size: 'short' | 'medium' | 'default' | 'long';
  state: 'default' | 'focus' | 'error';
  placeholder: string;
  value?: string;
  setInput: (value: string) => void;
};

export type CheckBoxProps = {
  content: string;
  isChecked?:  boolean;
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
  type: 'publish' | 'buy' | 'dirBuy' | 'dirRent';
  price: number;
  onClick?: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export type ChipProps = {
  title: string;
  size: 'small' | 'big';
  icon?: string;
  setValue?: (value: string) => void;
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
  type: 'book' | 'author';
  page: 'bookShelf' | 'search';
  bookList?: getBookshelfResProp;
  title: string;
  onClick?: () => void;
};

export type CardProps = {
  type: 'author' | 'genre';
  title: string;
  onClick: (value: string) => void;
  isSelected: boolean;
};

export type CartBookProp = {
  id: number;
  image: StaticImageData;
  title: string;
  author: string;
  price: number;
  setChecked?: any;
  checked?: boolean;
};
