import styled from 'styled-components';

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoadingContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const Container = styled.div`
  border-radius: 1.2rem;
  background: var(--BG_WHITE);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.9rem 4.2rem;
`;

export const Title = styled.div`
  color: var(--BG_BLACK);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding-top: 2.4rem;
`;

export const Content = styled.div`
  color: var(--BG_GRAY2);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  line-height: 130%; /* 1.56rem */
  padding: 0.4rem 0 1.8rem 0;
`;
