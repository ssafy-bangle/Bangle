import React from 'react';
import * as S from './index.styled';

export default function PageTitle({ children }: { children: React.ReactNode }) {
  return <S.Title>{children}</S.Title>;
}
