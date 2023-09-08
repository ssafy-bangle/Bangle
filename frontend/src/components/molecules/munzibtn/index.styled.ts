import styled from 'styled-components';
import Image from 'next/image';

export const MunziBtn = styled.div`
  width: 27.6rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: rgba(72, 75, 82, 0.50);
  border-radius: 1.2rem;
  border: 1px solid var(--BG_GRAY2);
  color: var(--BG_WHITE);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: rgba(72, 75, 82, 0.90);
    cursor: pointer;
  }
`;

export const Purchase = styled.div`
  color: var(--BG_GRAY2);
  font-weight: 400;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MunziPrice = styled.div`
  padding-right: 0.8rem;
  font-weight: 500;
`;

export const MunziDark = styled(Image)`
  width: 2.5rem;
`;
