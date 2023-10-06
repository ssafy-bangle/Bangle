import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 8rem;
`;

export const ImgBox = styled.div`
  position: relative;
`;

export const Light = styled(Image)`
  margin-left: 120px;
`;

export const Shine = styled(Image)`
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
  top: -8rem;
  position: relative;
  color: var(--BG_GRAY2);
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
