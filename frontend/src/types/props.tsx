export type ButtonProps = {
  length: 'long' | 'short';
  size?: 'big' | 'small';
  active?: boolean;
  content?: string;
  icon?: string;
  onClick?: () => void;
};

export type NavProps = {
  role: 'author' | 'user';
};

export type MenuProps = {
  name: string;
  url: string;
};

export type InputProps = {
  size: 'short' | 'long';
  state: 'default' | 'focus' | 'error';
  placeholder: string;
  setInput: (value: string) => void;
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
}