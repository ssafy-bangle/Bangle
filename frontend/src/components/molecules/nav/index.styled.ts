import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  padding: 6.6rem 0 6.6rem 0;
  position: relative;
  z-index: 5;
`;

export const LogoBox = styled(Image)`
  position: absolute;
  left: -130px;
  top: 60px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 6.2rem;
  margin-right: auto;
`;

export const NavContainer = styled.div`
  display: flex;
  height: 44px;
`;

export const CartBox = styled.div`
  margin: auto 1rem auto 4rem;
  cursor: pointer;
  font-size: 2.5rem;
  color: var(--BG_WHITE);
  position: absolute;
  right: -60px;
  top: 68px;
`;

export const Info = styled.div`
  color: var(--BG_GRAY1);
  margin: auto 0 auto 0;
  font-size: 2rem;
  font-weight: 400;
  & > strong {
    color: var(--BG_MAIN, #2cc295);
    font-weight: 700;
  }
`;
