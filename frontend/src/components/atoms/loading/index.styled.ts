import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export const Container = styled.span`
  display: inline-block;
  text-align: center;
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: 44px !important;
  color: var(--BG_MAIN) !important;
  margin: 10px auto 10px auto;
`;

export const Content = styled.div`
  font-size: 12px;
  color: var(--BG_WHITE);
  margin: 10px;
`;
