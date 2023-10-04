import { InputProps } from '@src/types/props';
import * as S from './index.styled';

export default function Input({ size, state, placeholder, value, type = 'text', setInput }: InputProps) {
  return (
    <>
      <S.StyledInput
        type={type}
        size={size}
        state={state}
        value={value}
        placeholder={placeholder}
        onChange={({ target: { value } }) => {
          setInput(value);
        }}></S.StyledInput>
    </>
  );
}
