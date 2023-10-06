import styled from 'styled-components';

export const TotalItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CartItemContainer = styled.div`
  margin-bottom: 1.2rem;
  width: 100%;
  height: 13.3rem;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const TextItemContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
`;

export const BookTitle = styled.div`
  font-size: 1.6rem;
  color: var(--BG_GRAY3);
  font-weight: 700;
`;
export const Author = styled.div`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  color: var(--BG_GRAY3);
  font-weight: 400;
`;
export const Price = styled.div`
  margin-top: 3.6rem;
  font-size: 1.6rem;
  color: var(--BG_MAIN);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  .anticon {
    color: var(--BG_GRAY3);
    font-size: 1.2rem;
  }
`;
