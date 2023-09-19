import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: auto;
`;

export const Menu = styled(Link)<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? '#2cc295' : '#a3a5a9')};
  font-size: 2rem;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
`;
