import styled from 'styled-components';
import Image from 'next/image';
export const SubTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2.8rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
`;
export const BookContainer = styled.div`
  display: grid;
  width: 98.4rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 3.2rem;
`;

export const Title = styled(SubTitle)`
  padding: 2.4rem 0 0 3rem;
`;

export const Container = styled.div`
  width: 98.4rem;
  margin: 0 auto 3rem auto;
`;

export const Content = styled.div`
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem 0 0 3rem;
`;

export const CoverContainer = styled.div`
  margin: 2.4rem 2.3rem 2.4rem 0;
`;

export const Img = styled(Image)`
  width: 16.8rem;
  height: 22.3rem;
  border-radius: 1.2rem;
  margin: 2.4rem 2.3rem 2.4rem 0;
`;

export const Left = styled.div``;

export const Box = styled.div`
  width: 98.4rem;
  height: 27.1rem;
  border-radius: 2.4rem;
  background-color: rgba(72, 75, 82, 0.5);
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;
