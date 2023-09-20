import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.6rem;
`;

export const SubTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2.8rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
`;

export const BookLength = styled.span`
  color: var(--BG_GRAY3);
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
`;

export const TotalBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--BG_GRAY1);
  background-color: transparent;
`;

export const NoValue = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  margin: 8rem 0%;
`;

export const BookContainer = styled.div<{ isClicked: boolean; page: string; type: string }>`
  display: grid;
  grid-template-columns: ${({ type }) => (type === 'author' ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)')};
  gap: ${({ type }) => (type === 'author' ? '2.8rem 2.7rem' : '2.8rem 1.6rem')};
  ${({ page, type, isClicked }) =>
    page === 'search' &&
    `
    overflow-y: ${isClicked ? 'visible' : 'hidden'};
    height: ${!isClicked ? (type === 'author' ? '14rem' : '24rem') : 'auto'};
  `}
`;
