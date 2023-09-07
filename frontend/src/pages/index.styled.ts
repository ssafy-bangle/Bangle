import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  height: 100vh;
  widht: 1280px;
  margin: 0 250px 0 250px;
`;

export const ImgBox = styled.div`
  position: relative;
`;

export const Light = styled(Image)`
  margin-left: 120px;
`;

export const Shine = styled(Image)`
  position: absolute;
  top: 200px;
  left: 0;
  z-index: 100;
`;

export const TitleContainer = styled.div`
  padding: 50px 0 25px 0;
`;

export const Title = styled.div`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--BG_GRAY2);
`;

export const Content = styled.div`
  color: var(--BG_GRAY2);
  font-size: 2rem;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;
`;
