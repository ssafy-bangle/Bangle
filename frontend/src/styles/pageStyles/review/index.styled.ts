import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 13.2rem - 44px);
`;

export const FullContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
`;

export const Title = styled.div`
  font-size: 3.2rem;
  margin-bottom: 2.4rem;
  font-weight: 700;
  color: var(--BG_WHITE);
`;

export const LeftSection = styled.div`
  width: 40%;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 20rem;
  margin-bottom: 2.4rem;
  background-color: transparent;
  border-radius: 1.2rem;
  color: var(--BG_GRAY1);
  border: 1px solid var(--BG_GRAY3);
  border-color: var(--BG_GRAY2);
  font-size: 1.6rem;
  font-weight: 400;
  resize: none;
  padding: 1.4rem 1.6rem 1.4rem 1.6rem;
  &:hover,
  &:focus {
    border-color: var(--BG_MAIN) !important;
    outline: 0;
  }
  &::placeholder {
    color: var(--BG_GRAY2);
  }
`;

export const RightSection = styled.div`
  width: 55%;
`;

export const ReviewContainer = styled.div`
  margin: 2.4rem 0;
  display: flex;
  justify-content: space-between;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: flex-end;
`;

export const NoReviewCard = styled.div`
  border: 1px dashed var(--BG_GRAY2);
  height: 26rem;
  width: 36%;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .bRHeNl {
    transform: scale(0.75);
  }
`;

export const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;