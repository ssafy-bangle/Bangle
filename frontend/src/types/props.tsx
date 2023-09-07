export type ButtonProps = {
  length: 'long' | 'short';
  size?: 'big' | 'small';
  active?: boolean;
  content?: string;
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
  mode: 'default' | 'focus' | 'error';
  content: string;
  placeholder: string;
  setInput: Function;
};

export type PasswordCheckProps = {
  setIsKeyValid: Function;
  setPrivateKey: Function;
};
