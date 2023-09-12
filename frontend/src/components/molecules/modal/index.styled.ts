import styled from 'styled-components';
import Image from 'next/image';
import { Button, Modal } from 'antd';

export const StyledButton = styled(Button)`
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background: rgba(72, 75, 82, 0.5);
  border-radius: 1.2rem;
  border: 1px solid var(--BG_GRAY2);
  color: var(--BG_WHITE);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledModal = styled(Modal)`
  max-width: 34.2rem;
`;

export const StyledContainer = styled.div`
  padding: 2.4rem 1.5rem 1.4rem 1.5rem;
  background: var(--BG_WHITE);
  border-radius: 2.4rem;
  border: 1px solid var(--BG_GRAY2);
`;

export const StyledTitle = styled.div`
  color: var(--BG_GRAY3);
  padding: 0 0 1.5rem 1.3rem;
  font-size: 2rem;
  font-weight: 700;
`;

export const Divider = styled.div`
  background-color: var(--BG_GRAY1);
  height: 0.1rem;
  width: 100%;
`;

export const MunziContainer = styled.div``;

export const FirstMunzi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 1.5rem;
  color: var(--BG_GRAY2);
  margin: 0.78rem 0;
`;
export const PriceContainer = styled.div`
  display: flex;
  margin-left: auto;
`;
export const MunziPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
  color: var(--BG_GRAY3);
`;
