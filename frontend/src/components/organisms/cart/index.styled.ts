import styled from 'styled-components';
import { Drawer } from 'antd';
import Image from 'next/image';

export const StyledDrawer = styled(Drawer)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  height: 385px;
  border-radius: 1.2rem;
  //   overflow-y: scroll;
`;

export const InfoContainer = styled(ListContainer)`
  background-color: var(--test);
  height: 150px;
  //   overflow-y: scroll;
`;
