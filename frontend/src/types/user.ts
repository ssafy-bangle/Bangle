export type UserInfo = {
  member_id: number;
  dust: number;
  email: string;
  nickname: string;
  provider: 'KAKAO';
  public_key: Uint8Array;
  role: 'ROLE_USER' | 'ROLE_AUTHOR';
  user_id: string;
};
