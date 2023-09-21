import { InputProps } from '@src/types/props';
import * as S from './index.styled';

export default function Input({ size, state, placeholder, value, setInput }: InputProps) {
  return (
    <>
      <S.StyledInput
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
