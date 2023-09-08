import * as S from './index.styled';
import { MunziBtnProps } from '@src/types/props';
import Image from 'next/image';
import { DarkMunzi } from '@src/assets/imgs';

export default function Munzibtn({ price, onClick }: MunziBtnProps) {
	return (
		<>
			<S.MunziBtn onClick={onClick}>
				<S.Purchase>구매하기</S.Purchase>
				<S.TextBox>
					<S.MunziPrice>{price} 먼지</S.MunziPrice>
					<Image src={DarkMunzi} alt='다크먼지' />
				</S.TextBox>
			</S.MunziBtn>
		</>
	);
}
