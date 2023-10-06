import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
`;

export const LeftSection = styled.div`
  width: 35%;
`;

export const AuthorInfo = styled.div`
  color: var(--BG_GRAY2);
  font-size: 1.6rem;
  line-height: normal;
  margin-bottom: 2.5rem;
  font-weight: 400;
`;

export const RightSection = styled.div`
  width: 60%;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageTitle = styled.div`
  color: var(--BG_GRAY3);
  font-size: 2.8rem;
  font-weight: 700;
  padding-bottom: 4rem;
`;

export const PartTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
`;

export const MainInfo = styled.div`
  color: var(--BG_WHITE);
  font-size: 3.2rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  & > strong {
    font-weight: 700;
  }
`;

export const BookShelf = styled.div`
  display: grid;
  width: 70rem;
  height: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;
