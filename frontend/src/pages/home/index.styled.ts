import styled from 'styled-components';

export const Container = styled.div`
  height: max;
`;

export const BannerSection = styled.div`
  padding-bottom: 6rem;
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 130px;
`;

export const BookBox = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    margin: auto;
  }
`;

export const RecommendSection = styled.div`
  height: max;
`;

export const BooksBox = styled.div`
  width: inherit;
  height: 140px;
  overflow: hidden;
`;

export const Title = styled.div`
  color: var(--BG_WHITE);
  font-size: 2.6rem;
  font-weight: 700;
  padding: 0 0 3rem 0;

  & > strong {
    color: var(--BG_MAIN);
  }
`;
