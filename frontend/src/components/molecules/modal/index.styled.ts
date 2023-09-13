import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackDrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
`;

export const StyledContainer = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
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
  align-items: center;
  margin-left: auto;
`;
export const MunziPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
  color: var(--BG_GRAY3);
`;
export const ButtonContainer = styled.div`
  z-index: 1100;
`;
