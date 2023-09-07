import { InputProps } from '@src/types/props';
import * as S from './index.styled';

// export default function Input({ content, mode }: InputProps) {
//   return (
//     <>
//       <S.StyledInput mode={mode} placeholder={`${content}`}></S.StyledInput>
export default function Input({ placeholder, setInput }: InputProps) {
  return (
    <>
      <input
        type="text"
        name="text"
        id="text"
        placeholder={placeholder}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </>
  );
}
