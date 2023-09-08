import * as S from './index.styled';
import { InputProps } from '@src/types/props';

export default function Checkbox({ placeholder, setInput}: InputProps) {
	return (
		<>
			<input type="checkbox" name="checkbox" id="checkbox"
				onChange={e=>setInput(e.currentTarget.value)}
			/>
			<label htmlFor="checkbox">{placeholder}</label>
		</>
	);
}
