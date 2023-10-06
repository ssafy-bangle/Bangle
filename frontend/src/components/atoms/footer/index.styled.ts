import Image from 'next/image';
import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  height: 16rem;
  font-size: 3.6rem;
  margin-top: 10rem;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LogoBox = styled(Image)`
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  color: var(--BG_GRAY2);
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 400;
`;
