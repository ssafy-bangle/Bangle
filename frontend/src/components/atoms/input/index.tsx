import { InputProps } from '@src/types/props';
import * as S from './index.styled';

export default function Input({ size, state, placeholder, setInput }: InputProps) {
  return (
    <>
      <S.StyledInput
        size={size}
        state={state}
        placeholder={placeholder}
        onChange={({ target: { value } }) => {
          console.log('Test', value);
          setInput(value);
        }}></S.StyledInput>
    </>
  );
}
