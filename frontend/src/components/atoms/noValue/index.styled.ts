import styled from 'styled-components';
import Image from 'next/image';

export const MunziContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const ImageMunzi = styled(Image)`
  width: 7.58rem;
  height: 7.05rem;
`;

export const TextContent = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: var(--BG_GRAY2);
`;

