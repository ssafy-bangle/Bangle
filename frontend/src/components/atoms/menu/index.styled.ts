import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: auto;
`;

export const Menu = styled(Link)<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#2cc295' : '#a3a5a9')};
  font-size: 2rem;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
`;
