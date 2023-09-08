import styled from 'styled-components';

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  width: 39.6rem;
  height: 48rem;
  border-radius: 1.2rem;
  background: var(--BG_WHITE);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
