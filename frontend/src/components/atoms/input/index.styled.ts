import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)<{ mode: 'default' | 'focus' | 'error' }>`
  width: 46.6rem;
  height: 5rem;
  color: {var(--BG_GRAY2);
  font-size: 1.2rem;
  font-weight: 400;
`;
