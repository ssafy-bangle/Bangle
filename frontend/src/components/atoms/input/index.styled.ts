import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)<{ size: 'long' | 'short'; state: 'default' | 'focus' | 'error' }>`
  width: ${({ size }) => (size === 'short' ? '27rem' : '31.2rem')} !important;
  padding: 1.4rem 1.6rem 1.4rem 1.6rem;
  border: 1px solid;
  background: transparent !important;
  border-color: ${({ state }) => {
    switch (state) {
      case 'focus':
        return 'var(--BG_MAIN)';
      case 'error':
        return 'var(--BG_ERROR)';
      default:
        return 'var(--BG_GRAY2)';
    }
  }} !important;
  font-size: ${({ size }) => (size === 'short' ? '1.2rem' : '1.6rem')} !important;
  font-weight: 400;
  border-radius: 1.2rem;
`;
