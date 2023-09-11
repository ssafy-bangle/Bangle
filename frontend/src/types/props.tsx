export type ButtonProps = {
  length: 'long' | 'short';
  size?: 'big' | 'small';
  theme?: 'line' | 'text';
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
