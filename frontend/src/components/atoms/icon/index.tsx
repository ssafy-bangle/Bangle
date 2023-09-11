import * as S from './index.styled';
import { IconProps } from '@src/types/props';
import { SyncOutlined } from '@ant-design/icons';

export default function Icon({ name }: IconProps) {
	return (
		<>
			{name == 'mode' && <SyncOutlined />}
		</>
	);
}
