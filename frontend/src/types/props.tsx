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

export type menuProps = {
  name: string;
  url: string;
};
