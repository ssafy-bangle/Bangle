export type UserInfo = {
  nickname: string;
  dust: number;
  email: string;
  roles: 'ROLE_USER' | 'ROLE_AUTHOR';
  userId: string;
};
