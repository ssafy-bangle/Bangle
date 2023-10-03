import styled from 'styled-components';

export const Container = styled.div`
  width: 98.4rem;
  margin: auto;
`;

export const Title = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

export const Title2 = styled(Title)`
  margin-top: 5.4rem;
  margin-bottom: 2rem;
`;

export const MiniTitle = styled.div`
  color: var(--BG_GRAY1);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;

export const ChipBox = styled.span`
  display: inline-block;
  margin-right: 2rem;
  margin-bottom: 1.6rem;
`;

export const Box = styled.div`
  width: 98.4rem;
  height: 27.1rem;
  border-radius: 1.2rem;
  background: rgba(72, 75, 82, 0.5);
  padding: 2.4rem;
`;

export const BarBox = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 30%;
`;

export const Right = styled.div`
  width: 70%;
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Content = styled.div`
  margin-bottom: 1.6rem;
`;

export const InfoTitle = styled.div`
  color: var(--BG_GRAY2);
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Info = styled.div`
  color: var(--BG_GRAY1);
  font-size: 3.2rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const Line = styled.div`
  width: 23rem;
  height: 0.1rem;
  position: absolute;
  top: 85.5rem;
  background-color: var(--BG_GRAY2);
`;
