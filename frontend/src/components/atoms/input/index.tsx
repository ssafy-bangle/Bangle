import * as S from './index.styled';
import { InputProps } from '@src/types/props';

export default function Input({ placeholder, setInput }: InputProps) {
  return (
    <>
      <input type="text" name="text" id="text" 
        placeholder={placeholder}
        onChange={e=>setInput(e.currentTarget.value)}
      />
    </>
  );
}
