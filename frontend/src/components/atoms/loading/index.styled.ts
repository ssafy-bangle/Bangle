import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export const Container = styled.span`
  display: inline-block;
  text-align: center;
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: 44px !important;
  color: var(--BG_MAIN) !important;
  margin: 14px;
`;

export const Content = styled.div`
  font-size: 14px;
  color: var(--BG_WHITE);
  margin: 10px;
  letter-spacing: 1px;
`;
