import Button from '@src/components/atoms/button';
import ReviewCard from '@src/components/atoms/reviewCard';
import styled from 'styled-components';

export const Container = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookInfo = styled.div`
  color: var(--BG_GRAY1);
  width: 65%;
`;

export const TopInfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;

export const BookTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 4rem;
  font-weight: 700;
  margin-right: 2rem;
`;

export const SmallInfo = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.3rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.3rem;
`;
export const InfoText = styled.div``;

export const InfoTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const InfoContent = styled.div<{ isClicked: boolean }>`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  text-align: justify;
  overflow-y: ${({ isClicked }) => (isClicked ? 'visible' : 'hidden')};
  height: ${({ isClicked }) => !isClicked && '16.4rem'};
  margin-bottom: 1.6rem;
`;

export const MoreInfoBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: auto;
  display: flex;
  color: var(--BG_GRAY1);
  background-color: transparent;
`;

export const ReviewContainer = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2rem;
  font-weight: 700;
  margin: 6rem 0 1.6rem 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.4rem 2rem;
  margin-top: 2.4rem;
`;

export const ReviewCardItem = styled(ReviewCard)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.4rem 2rem;
  margin-top: 2.4rem;
`;
