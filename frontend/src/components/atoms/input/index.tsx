import { InputProps } from '@src/types/props';
import * as S from './index.styled';

export default function Input({ content, mode }: InputProps) {
  return (
    <>
      <S.StyledInput mode={mode} placeholder={`${content}`}></S.StyledInput>
    </>
  );
}
