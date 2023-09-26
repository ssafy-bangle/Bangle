import styled from 'styled-components';
import { Drawer } from 'antd';
import Image from 'next/image';

export const StyledDrawer = styled(Drawer)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const Img = styled(Image)``;

export const Title = styled.div`
  color: var(--BG_GRAY3);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  margin: auto 0 auto 0;
  padding-left: 1rem;
`;

export const ListContainer = styled.div`
  height: 40rem;
  padding: 1rem 0;
  border-radius: 1.2rem;
  overflow: auto;
`;

export const TotalItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CartItemContainer = styled.div`
  margin-bottom: 1.2rem;
  width: 100%;
  height: 13.3rem;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const TextItemContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
`;

export const BookTitle = styled.div`
  font-size: 1.6rem;
  color: var(--BG_GRAY3);
  font-weight: 700;
`;
export const Author = styled.div`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  color: var(--BG_GRAY3);
  font-weight: 400;
`;
export const Price = styled.div`
  margin-top: 3.6rem;
  font-size: 1.6rem;
  color: var(--BG_MAIN);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  .anticon {
    color: var(--BG_GRAY3);
    font-size: 1.2rem;
  }
`;

export const InfoContainer = styled.div`
  font-size: 2rem;
  color: var(--BG_BLACK);
  font-weight: 700;
  margin: 2rem 0 2.4rem 0;
`;

export const SelectedBooks = styled.div`
  margin: 0.8rem 0 3rem 0;
  font-size: 1.4rem;
  max-width: 31rem;
  line-height: 1.8;
  color: var(--BG_GRAY2);
  font-weight: 500;
`;

export const TotalPrice = styled.div`
  font-size: 2rem;
  color: var(--BG_MAIN);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.8rem;
`;