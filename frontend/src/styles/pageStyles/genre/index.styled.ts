import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 6rem 0;
`;

export const MainTitle = styled.div`
  color: var(--BG_WHITE);
  font-size: 3.6rem;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  color: var(--BG_GRAY2);
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 400;
`;

export const CardsContainer = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.8rem;
  margin-bottom: 6rem;
`;

export const NextButton = styled.div`
  display: flex;
  justify-content: center;
`;
