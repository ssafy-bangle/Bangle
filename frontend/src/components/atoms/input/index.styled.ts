import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)<{
  size: 'short' | 'default' | 'medium' | 'long';
  state: 'default' | 'focus' | 'error';
}>`
  width: ${({ size }) => {
    switch (size) {
      case 'short':
        return '22.7rem';
      case 'medium':
        return '27rem';
      case 'long':
        return '56.4rem';
      default:
        return '31.2rem';
    }
  }};
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
  font-size: ${({ size }) => (size === 'default' ? '1.2rem' : '1.6rem')} !important;
  font-weight: 400;
  border-radius: 1.2rem;
  color: ${({ size }) => (size === 'default' ? 'var(--BG_GRAY3)' : 'var(--BG_GRAY1)')};
  &:hover,
  &:focus {
    border-color: var(--BG_MAIN) !important;
  }
`;
