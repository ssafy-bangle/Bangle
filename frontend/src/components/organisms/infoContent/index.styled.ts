import styled from 'styled-components';
import { Drawer } from 'antd';
import Image from 'next/image';

export const StyledDrawer = styled(Drawer)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  width: 31.2rem;
`;

export const Box = styled.div`
  display: flex;
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
  background-color: var(--test);
  border-radius: 1.2rem;
`;

export const InfoContainer = styled(ListContainer)`
  background-color: var(--test);
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;
