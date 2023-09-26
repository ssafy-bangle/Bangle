import { LoadingProps } from '@src/types/props';
import * as S from './index.styled';
import { Spin } from 'antd';

export default function Loading({ content }: LoadingProps) {
  const antIcon = <S.StyledLoadingOutlined spin />;

  return (
    <S.Container>
      <Spin indicator={antIcon} />
      {content && <S.Content>{content}</S.Content>}
    </S.Container>
  );
}
