import { Function } from '@babel/types';
import * as S from './index.styled';
import { InputProps } from '@src/types/props';

export default function PasswordInput({ placeholder, setInput}: InputProps) {
	return (
		<>
			<input type="password" name="password" id="password" 
				placeholder={placeholder}
				pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
				onChange={e=>setInput(e.currentTarget.value)}
			/>
		</>
	);
}
