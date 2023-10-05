import * as S from './index.styled';
import { LogoImg } from '@src/assets/imgs';
import { useRouter } from 'next/router';
import { UpCircleOutlined } from '@ant-design/icons';

export default function Footer() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤 애니메이션 적용
    });
  };

  return (
    <>
      <S.Footer>
        <S.Left>
          <S.LogoBox src={LogoImg} width={36} alt="logoImg" onClick={() => router.push('/home')} />
          <S.Top>Copyright © 2023 Bangle All Rights Reserved.</S.Top>
        </S.Left>
        <UpCircleOutlined style={{color: 'var(--BG_GRAY2)'}} onClick={scrollToTop} />
      </S.Footer>
    </>
  );
}
