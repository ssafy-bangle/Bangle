import * as S from './index.styled';
import { ButtonProps } from '@src/types/props';

export default function Button({ length, size, content, active = true, onClick }: ButtonProps) {
	return (
		<>
			<S.Button length={length} size={size} active={active} onClick={onClick}>
				{content}
			</S.Button>
		</>
	);
}
