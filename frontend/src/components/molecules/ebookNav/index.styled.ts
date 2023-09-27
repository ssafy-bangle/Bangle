import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  z-index: 5;
  padding-top: 5rem;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 3.6rem;
`;

export const Icon = styled(Image)`
  width: 2.1rem;
  height: 2.1rem;
  cursor: pointer;
`;

export const CloseIcon = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: auto;
`;
