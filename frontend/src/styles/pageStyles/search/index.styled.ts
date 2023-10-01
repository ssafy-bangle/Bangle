import styled from 'styled-components';

export const Footer = styled.div`
  height: 10rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputStyle = styled.div`
  ::placeholder {
    color: var(--BG_GRAY3);
  }
`;

export const SearchBtn = styled.button`
  color: var(--BG_MAIN);
  font-size: 2.4rem;
  background-color: transparent;
  border: none;
  margin: 1.6rem;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: none;
    outline: none;
    color: var(--BG_MAIN);
  }
`;

export const SubTitle = styled.div`
  margin-top: 7.6rem;
  color: var(--BG_GRAY1);
  font-size: 2.8rem;
  font-weight: 700;
  padding-bottom: 1.6rem;
`;

export const BookContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.8rem 2rem;
`;
