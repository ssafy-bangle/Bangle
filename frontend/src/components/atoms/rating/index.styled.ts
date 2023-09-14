import { Rate } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const RateStar = styled(Rate)`
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--BG_POINT);
`;

export const LabelRate = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2rem;
  font-weight: 700;
`;
