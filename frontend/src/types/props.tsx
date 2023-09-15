import { ReactRenderer } from '@storybook/react';
import { StaticImageData } from 'next/image';

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
  imgSrc: StaticImageData;
  size?: 'small' | 'big';
};

export type BookProps = {
  imgSrc: StaticImageData;
};

export type MenuProps = {
  name: string;
  url: string;
};

export type InputProps = {
  size: 'short' | 'medium' | 'default' | 'long';
  state: 'default' | 'focus' | 'error';
  placeholder: string;
  setInput: (value: string) => void;
};

export type CheckBoxProps = {
  content: string;
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
  type?: 'publish' | 'buy' | 'munzi';
  publishPrice?: number;
};

export type ChipProps = {
  title: string;
  size: 'small' | 'big';
  icon?: string;
  onClick?: () => void;
};

export type RatingProps = {
  value: number;
  label: boolean;
  editable: boolean;
  setInput: (value: number) => void;
};
