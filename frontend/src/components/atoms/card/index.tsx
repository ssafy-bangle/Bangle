import { RightOutlined } from '@ant-design/icons';
import * as S from './index.styled';
import Icon from '@src/components/atoms/icon';
import { CardProps } from '@src/types/props';
import { useRouter } from 'next/router';

export default function Card({ title, type }: CardProps) {
  const router = useRouter();

  return (
    <>
      <S.CardContainer type={type} title={title}>
        <S.Title>{title}</S.Title>
        {type == 'author' && (
          <S.Button
            onClick={() => {
              router.push('/mypage');
            }}>
            작가 홈 바로가기 <RightOutlined />
          </S.Button>
        )}
      </S.CardContainer>
    </>
  );
}
