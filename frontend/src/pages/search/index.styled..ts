import styled from 'styled-components';


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
  &:hover{
    box-shadow: none;
    outline: none;
    color: var(--BG_MAIN);
  }
`;
